// erp-prensas-v663-rechazos-fix10-a1a3a4-dinamico
/* Service worker sin caché pesado. */
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => { if (event.request.method !== 'GET') return; event.respondWith(fetch(event.request, { cache: 'no-store' }).catch(() => caches.match(event.request))); });
