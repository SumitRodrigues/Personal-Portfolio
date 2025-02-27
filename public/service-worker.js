self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing...');
    event.waitUntil(
        caches.open('pwa-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/logo192.png',
                '/logo512.png'
            ]);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating...');
    event.waitUntil(
        Promise.all([
            self.clients.claim(),
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cache => {
                        if (cache !== 'pwa-cache') {
                            console.log('[Service Worker] Deleting old cache:', cache);
                            return caches.delete(cache);
                        }
                    })
                );
            })
        ])
    );
    self.clients.matchAll({ includeUncontrolled: true }).then(clients => {
        clients.forEach(client => client.navigate(client.url));
    });
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    if (event.request.url.includes('/_next/')) {
        event.respondWith(fetch(event.request));
        return;
    }
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).catch(() => new Response('Offline', { status: 503 }));
        })
    );
});
