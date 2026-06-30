/* ERP Prensas V6.6.3 - service worker sin caché pesado.
   No guarda datos de producción ni histórico. Solo permite modo standalone PWA.
*/
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // No interceptar POST/API para no dañar consultas dinámicas.
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request, { cache: 'no-store' }).catch(() => caches.match(event.request))
  );
});
