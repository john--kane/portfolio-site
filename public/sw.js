self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('app-store').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/build/bundle.js',
                '/build/bundle.css',
                '/avatar.png',
                '/github.png',
                '/favicon.png',
                '/linkedin.png',
            ]);
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});