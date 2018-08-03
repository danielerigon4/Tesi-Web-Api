'use strict';
// Array di configurazione del service worker
var config = {
    version: 'versionesw1::',
    // Risorse da inserire in cache immediatamente - Precaching
    staticCacheItems: [ 
        '/wp-includes/js/jquery/jquery.js', '/wp-content/themes/miotema/logo.png', '/wp-content/themes/miotema/fonts/opensans.woff', '/wp-content/themes/miotema/fonts/fontawesome-webfont.woff2',
    ],
};
// Funzione che restituisce una stringa da utilizzare come chiave per la cache
function cacheName (key, opts) { 
    return `${opts.version}${key}`;
}
// Evento install
self.addEventListener('install', event => { event.waitUntil( 
    // Inserisco in cache le URL configurate in config.staticCacheItems 
    caches.open(cacheName('static', config) ).then(cache => cache.addAll(config.staticCacheItems)).then(() => self.skipWaiting()));
    /*self.skipWaiting() evita l'attesa, il che significa che il service worker si attivera immediatamente non appena conclusa l'installazione*/
    console.log("Service Worker Installato");
});