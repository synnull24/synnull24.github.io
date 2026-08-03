/**
 * EmojiTestWeb-benchmark.js
 * Core measurement engine: real FPS sampling, particle field, and the
 * Auto ramp/ease/reset cycle. No UI logic lives here — see EmojiTestWeb-app.js.
 */
(function () {
  'use strict';

  const FRAME_BUDGET_MS = 1000 / 60;   // hard cap: never do render work faster than 60fps
  const FPS_WINDOW_MS = 500;           // rolling window used to sample real fps
  const SPARK_POINTS = 40;             // sparkline history length
  const AUTO_TICK_MS = 220;            // how often the auto algorithm re-evaluates
  const RECOVER_FPS = 59;              // fps considered "back at 60"
  const RECOVER_TICKS = 4;             // consecutive stable ticks required to confirm recovery
  const WAIT_MS = 1500;                // pause at 0 before ramping again ("đợi hết lag")
  const HARD_CEILING = 3000;           // safety ceiling so auto can't runaway forever

  const EMOJI_SET = [
    '😀', '😂', '🤩', '😎', '🥳', '😍', '🚀', '✨', '🔥', '💯',
    '🌟', '🎈', '🍀', '💎', '🌈', '⚡', '🎉', '🦄', '🍕', '🎮',
    '🌸', '🍉', '🎯', '🪐', '🦋', '🍩', '🧠', '🎨', '🍔', '🌻',
  ];

  function rand(min, max) { return Math.random() * (max - min) + min; }
  function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }

  class EmojiBenchmark extends EventTarget {
    constructor(fieldEl) {
      super();
      this.field = fieldEl;
      this.particles = [];
      this.count = 0;

      this.currentFPS = 0;
      this._frameTimestamps = [];
      this._lastUpdate = performance.now();
      this._sparkHistory = new Array(SPARK_POINTS).fill(0);
      this._lastSparkPush = 0;

      this.width = fieldEl.clientWidth || 1;
      this.height = fieldEl.clientHeight || 1;

      this.autoActive = false;
      this.autoPhase = 'idle'; // idle | increasing | decreasing | waiting
      this._autoTimer = null;
      this._autoEndAt = null;
      this._stableTicks = 0;
      this._waitStart = null;

      this.stats = { max: 0, min: 0, sum: 0, samples: 0 };

      this._setupResizeObserver();
      this._loop = this._loop.bind(this);
      requestAnimationFrame(this._loop);
    }

    _setupResizeObserver() {
      if (typeof ResizeObserver === 'undefined') return;
      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          this.width = Math.max(1, entry.contentRect.width);
          this.height = Math.max(1, entry.contentRect.height);
        }
      });
      ro.observe(this.field);
    }

    /* ---------------- particle field ---------------- */

    setCount(n) {
      n = Math.max(0, Math.min(HARD_CEILING, Math.round(n)));

      if (n > this.particles.length) {
        const toAdd = n - this.particles.length;
        const frag = document.createDocumentFragment();
        for (let i = 0; i < toAdd; i++) {
          const el = document.createElement('span');
          el.className = 'particle';
          el.textContent = pick(EMOJI_SET);
          const x = rand(0, Math.max(1, this.width - 30));
          const y = rand(0, Math.max(1, this.height - 30));
          const angle = rand(0, Math.PI * 2);
          const speed = rand(45, 120);
          el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          frag.appendChild(el);
          this.particles.push({
            el, x, y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
          });
        }
        this.field.appendChild(frag);
      } else if (n < this.particles.length) {
        const toRemove = this.particles.length - n;
        for (let i = 0; i < toRemove; i++) {
          const p = this.particles.pop();
          p.el.remove();
        }
      }

      this.count = this.particles.length;
    }

    /* ---------------- main loop (hard-capped at 60fps) ---------------- */

    _loop(now) {
      requestAnimationFrame(this._loop);

      const since = now - this._lastUpdate;
      if (since < FRAME_BUDGET_MS - 1) return; // throttle: skip extra callbacks on >60Hz displays
      const dt = Math.min(since, 48) / 1000;    // seconds, clamped to avoid jumps after tab-hide
      this._lastUpdate = now;

      this._updateParticles(dt);
      this._measureFPS(now);
      this._pushSpark(now);
      this._recordStat();

      this.dispatchEvent(new CustomEvent('tick', {
        detail: {
          fps: this.currentFPS,
          count: this.count,
          stats: this._statsSnapshot(),
          phase: this.autoPhase,
          spark: this._sparkHistory,
        },
      }));
    }

    _updateParticles(dt) {
      const w = this.width, h = this.height, list = this.particles;
      for (let i = 0; i < list.length; i++) {
        const p = list[i];
        let x = p.x + p.vx * dt;
        let y = p.y + p.vy * dt;
        if (x < 0) { x = 0; p.vx = Math.abs(p.vx); }
        else if (x > w - 28) { x = w - 28; p.vx = -Math.abs(p.vx); }
        if (y < 0) { y = 0; p.vy = Math.abs(p.vy); }
        else if (y > h - 28) { y = h - 28; p.vy = -Math.abs(p.vy); }
        p.x = x; p.y = y;
        p.el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      }
    }

    _measureFPS(now) {
      const ts = this._frameTimestamps;
      ts.push(now);
      while (ts.length && now - ts[0] > FPS_WINDOW_MS) ts.shift();
      const raw = Math.min(60, ts.length * (1000 / FPS_WINDOW_MS));
      // light smoothing so the readout doesn't flicker frame to frame
      this.currentFPS = Math.round(this.currentFPS * 0.5 + raw * 0.5);
    }

    _pushSpark(now) {
      if (now - this._lastSparkPush < 120) return;
      this._lastSparkPush = now;
      this._sparkHistory.push(this.currentFPS);
      if (this._sparkHistory.length > SPARK_POINTS) this._sparkHistory.shift();
    }

    _recordStat() {
      const c = this.count;
      this.stats.max = Math.max(this.stats.max, c);
      this.stats.min = this.stats.samples === 0 ? c : Math.min(this.stats.min, c);
      this.stats.sum += c;
      this.stats.samples += 1;
    }

    _statsSnapshot() {
      const avg = this.stats.samples ? Math.round(this.stats.sum / this.stats.samples) : 0;
      return { current: this.count, max: this.stats.max, min: this.stats.min, avg };
    }

    resetStats() {
      this.stats = { max: this.count, min: this.count, sum: 0, samples: 0 };
    }

    /* ---------------- manual mode ---------------- */

    setManual(n) {
      this.stopAuto();
      this.setCount(n);
      this.resetStats();
    }

    /* ---------------- auto mode ---------------- */

    startAuto(durationMs) {
      this._clearAutoTimer();
      this.autoActive = true;
      this.autoPhase = 'increasing';
      this._stableTicks = 0;
      this._waitStart = null;
      this.setCount(0);
      this.resetStats();
      this._autoEndAt = durationMs ? performance.now() + durationMs : null;
      this._autoTimer = setInterval(() => this._autoTick(), AUTO_TICK_MS);
    }

    stopAuto() {
      if (!this.autoActive) return;
      this.autoActive = false;
      this.autoPhase = 'idle';
      this._clearAutoTimer();
    }

    _clearAutoTimer() {
      if (this._autoTimer) { clearInterval(this._autoTimer); this._autoTimer = null; }
    }

    _autoTick() {
      if (!this.autoActive) return;

      if (this._autoEndAt && performance.now() >= this._autoEndAt) {
        this.setCount(0);
        this.stopAuto();
        this.dispatchEvent(new CustomEvent('autocomplete'));
        return;
      }

      const fps = this.currentFPS;
      const c = this.count;

      if (this.autoPhase === 'increasing') {
        if (fps >= RECOVER_FPS) {
          const step = Math.max(8, Math.round(c * 0.09));      // tăng nhanh
          this.setCount(c + step);
        } else {
          this.autoPhase = 'decreasing';
          this._stableTicks = 0;
        }
      } else if (this.autoPhase === 'decreasing') {
        if (fps >= RECOVER_FPS) {
          this._stableTicks += 1;
          if (this._stableTicks >= RECOVER_TICKS) {
            this.autoPhase = 'waiting';
            this._waitStart = performance.now();
            this.setCount(0);                                   // về đúng số 0
          }
        } else {
          this._stableTicks = 0;
          const step = Math.max(2, Math.round(c * 0.05));        // giảm chậm
          this.setCount(Math.max(0, c - step));
        }
      } else if (this.autoPhase === 'waiting') {
        if (performance.now() - this._waitStart >= WAIT_MS) {    // đợi hết lag
          this._waitStart = null;
          this.autoPhase = 'increasing';
        }
      }
    }
  }

  window.EmojiBenchmark = EmojiBenchmark;
})();
