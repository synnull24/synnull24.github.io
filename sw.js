// Food Simulator VietNam — Service Worker
// Purpose: (1) real offline caching of the app shell + dish images,
//          (2) satisfies Chrome's installability criteria so "Add to
//              Home Screen" mints a real WebAPK instead of a shortcut.
// NOTE: this file must be hosted at the SAME ORIGIN as the app (same
// folder as the html file) and served over HTTPS — service workers
// cannot be registered from a local file:// page or from a different
// origin than the page that registers them.

const CACHE_NAME = 'fsvn-cache-v1';
const APP_SHELL = ['./', './index.html'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL).catch(() => {
        // if index.html isn't at this exact relative path, don't fail install —
        // runtime caching below still covers it on first navigation.
      }))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

// Cache-first for same-origin app shell; cache-first-then-network for
// cross-origin dish images (so once viewed, they work offline too).
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => {
          // offline and not cached — for navigations, fall back to the shell
          if (req.mode === 'navigate') return caches.match('./index.html');
          return new Response('', { status: 408, statusText: 'Offline' });
        });
    })
  );
});
