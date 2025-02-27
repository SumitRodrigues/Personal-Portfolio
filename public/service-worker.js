const CACHE_NAME = "portfolio-cache-v1";
const urlsToCache = [
  "/",
  "/manifest.json",
  "/favicon.ico",
  "/_next/static/*", // Cache Next.js static files
  "/_next/static/chunks/*", // Cache Next.js chunks
  "/_next/static/css/*", // Cache Next.js CSS files
  "/_next/static/media/*", // Cache Next.js media files
  "/images/profile/developer-pic-5.png", // Cache profile picture
  "/images/svgs/miscellaneous_icons_1.svg" // Cache SVG icons
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});