/**
 * EmojiTestWeb-app.js
 * UI layer: builds the preset buttons, reflects engine ticks on screen,
 * and manages selection / collapse state. Talks to EmojiBenchmark only
 * through its public methods and the "tick" / "autocomplete" events.
 */
(function () {
  'use strict';

  const PRESETS = [1, 5, 10, 25, 50, 100, 250, 500, 750, 1000, 1250, 1500, 1750, 2000];
  const nf = new Intl.NumberFormat('vi-VN');

  const field = document.getElementById('field');
  const fieldEmpty = document.getElementById('fieldEmpty');
  const fpsBlock = document.getElementById('fpsBlock');
  const fpsNumber = document.getElementById('fpsNumber');
  const fpsCaption = document.getElementById('fpsCaption');
  const fpsSparkLine = document.getElementById('fpsSparkLine');
  const statCurrent = document.getElementById('statCurrent');
  const statMax = document.getElementById('statMax');
  const statMin = document.getElementById('statMin');
  const statAvg = document.getElementById('statAvg');
  const presetRow = document.getElementById('presetRow');
  const deck = document.getElementById('deck');
  const deckHandle = document.getElementById('deckHandle');
  const deckBody = document.getElementById('deckBody');

  const bench = new EmojiBenchmark(field);

  /* ---------------- build preset buttons ---------------- */

  const checkSvg =
    '<span class="check-badge" aria-hidden="true"><svg viewBox="0 0 24 24">' +
    '<path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="3" fill="none" ' +
    'stroke-linecap="round" stroke-linejoin="round"/></svg></span>';

  PRESETS.forEach((n) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn--preset';
    btn.dataset.count = String(n);
    btn.innerHTML = `<span>${n}</span>${checkSvg}`;
    presetRow.appendChild(btn);
  });

  const allModeButtons = Array.from(document.querySelectorAll('.btn'));

  function setActiveButton(btn) {
    allModeButtons.forEach((b) => b.classList.toggle('is-active', b === btn));
  }

  /* ---------------- button wiring ---------------- */

  document.querySelector('[data-mode="auto"]').addEventListener('click', function () {
    if (this.classList.contains('is-active')) {
      bench.stopAuto();
      setActiveButton(null);
      return;
    }
    bench.startAuto(null);
    setActiveButton(this);
  });

  document.querySelector('[data-mode="auto60"]').addEventListener('click', function () {
    if (this.classList.contains('is-active')) {
      bench.stopAuto();
      setActiveButton(null);
      return;
    }
    bench.startAuto(60000);
    setActiveButton(this);
  });

  presetRow.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn--preset');
    if (!btn) return;
    bench.setManual(Number(btn.dataset.count));
    setActiveButton(btn);
  });

  bench.addEventListener('autocomplete', () => setActiveButton(null));

  /* ---------------- collapsible deck ---------------- */

  deckHandle.addEventListener('click', () => {
    const collapsed = deck.classList.toggle('is-collapsed');
    deckHandle.setAttribute('aria-expanded', String(!collapsed));
  });

  /* ---------------- engine -> UI ---------------- */

  function fpsStatus(fps) {
    if (fps >= 50) return 'is-good';
    if (fps >= 30) return 'is-warn';
    return 'is-bad';
  }

  function fpsCaptionFor(fps, phase) {
    if (phase === 'increasing') return 'Auto: đang tăng dần…';
    if (phase === 'decreasing') return 'Auto: đang giảm để hồi phục…';
    if (phase === 'waiting') return 'Auto: đợi hết lag…';
    if (fps >= 58) return 'Mượt — ổn định 60 FPS';
    if (fps >= 50) return 'Tốt';
    if (fps >= 30) return 'Bắt đầu giật, khung hình giảm';
    if (fps > 0) return 'Giật nặng — máy đang quá tải';
    return 'Đang chờ đo…';
  }

  function sparkPoints(values) {
    const n = values.length;
    if (n < 2) return '0,28 100,28';
    let out = '';
    for (let i = 0; i < n; i++) {
      const x = (i / (n - 1)) * 100;
      const y = 28 - (Math.min(60, values[i]) / 60) * 28;
      out += `${x.toFixed(1)},${y.toFixed(1)} `;
    }
    return out.trim();
  }

  bench.addEventListener('tick', (e) => {
    const { fps, count, stats, phase, spark } = e.detail;

    fpsNumber.textContent = fps;
    fpsBlock.classList.remove('is-good', 'is-warn', 'is-bad');
    fpsBlock.classList.add(fpsStatus(fps));
    fpsCaption.textContent = fpsCaptionFor(fps, phase);
    fpsSparkLine.setAttribute('points', sparkPoints(spark));

    statCurrent.textContent = nf.format(stats.current);
    statMax.textContent = nf.format(stats.max);
    statMin.textContent = nf.format(stats.min);
    statAvg.textContent = nf.format(stats.avg);

    fieldEmpty.style.display = count > 0 ? 'none' : '';
  });
})();
