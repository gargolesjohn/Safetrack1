const CACHE_NAME = 'safetrack-cdm-v31-dark-theme-complete';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Always fetch live from network with cache bypass
  event.respondWith(
    fetch(event.request, { cache: 'no-store' }).catch(() => fetch(event.request))
  );
});


