const CACHE_NAME = 'tornei-scuola-offline-v50';

const APP_SHELL = [
  './',
  './index.html',
  './admin.html',
  './admin/',
  './admin/index.html',
  './admin/admin.html',
  './live.html',
  './gym.html',
  './bracket-demo.html',
  './manifest.webmanifest',
  './favicon.svg',
  './image.png',
  './css/style.css',
  './css/style.css?v=50',
  './css/admin-modules.css',
  './css/admin-modules.css?v=50',
  './js/app-config.js',
  './js/admin-system.js',
  './js/admin-users.js',
  './js/admin-users-panel.js',
  './js/archive.js',
  './js/auth.js',
  './js/bracket-demo.js',
  './js/csv-import.js',
  './js/db.js',
  './js/device.js',
  './js/error-logger.js',
  './js/events.js',
  './js/gym-screen.js',
  './js/gym-screen.js?v=50',
  './js/knockout-bracket.js',
  './js/live.js',
  './js/main-admin.js',
  './js/main-admin.js?v=50',
  './js/main-index.js',
  './js/main-index.js?v=50',
  './js/main-live.js',
  './js/main-live.js?v=50',
  './js/matches.js',
  './js/offline.js',
  './js/offline-db.js',
  './js/offline-store.js',
  './js/onboarding.js',
  './js/platform-ops.js',
  './js/reports.js',
  './js/schedule.js',
  './js/teams.js',
  './js/telegram.js',
  './js/utils.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => Promise.allSettled(APP_SHELL.map((url) => cache.add(url))))
      .catch(() => undefined)
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request);
      const networkPromise = fetch(request)
        .then((response) => {
          if (response && response.ok) cache.put(request, response.clone());
          return response;
        })
        .catch(async () => {
          if (cached) return cached;
          if (request.mode === 'navigate' || request.destination === 'document') {
            return cache.match('./index.html');
          }
          return new Response('', { status: 504, statusText: 'Offline asset unavailable' });
        });

      if (request.mode === 'navigate' || request.destination === 'document') {
        return networkPromise;
      }

      return cached || networkPromise;
    })
  );
});
