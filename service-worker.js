const APP_PREFIX = 'FoodFest-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
    "./index.html",
    "./events.html",
    "./tickets.html",
    "./schedule.html",
    "./assets/css/style.css",
    "./assets/css/bootstrap.css",
    "./assets/css/tickets.css",
    "./dist/app.bundle.js",
    "./dist/events.bundle.js",
    "./dist/tickets.bundle.js",
    "./dist/schedule.bundle.js"
];

// Install the Service Worker
// ==========================================
self.addEventListener('install', function (e) {
    // wait until the work is complete before terminating the service worker.
    e.waitUntil(
        // find specific cache by name
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache : ' + CACHE_NAME)
            // add every file from FTC array to the cache
            return cache.addAll(FILES_TO_CACHE)
        })
    )
});

// Activate the Service Worker
// ==========================================
self.addEventListener('activate', function (e) {
    e.waitUntil(
        // .keys() ret array of all cache names called keyList
        caches.keys().then(function (keyList) {
            let cacheKeeplist = keyList.filter(function (key) {
                return key.indexOf(APP_PREFIX);
            });
            // add the current cache to the keeplist in the activate event listener,
            cacheKeeplist.push(CACHE_NAME);

            return Promise.all(
                keyList.map(function (key, i) {
                    if (cacheKeeplist.indexOf(key) === -1) {
                        console.log('deleting cache : ' + keyList[i]);
                        // return a Promise that resolves once all old versions are deleted
                        return caches.delete(keyList[i]);
                    }
                })
            );
        })
    );
});

