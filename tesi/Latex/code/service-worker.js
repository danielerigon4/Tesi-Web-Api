self.addEventListener('install', event => { 
    console.log("Service Worker Installato");
});
self.addEventListener('activate', event => { 
    console.log("Service Worker Attivo");
});
self.addEventListener('fetch', event => { 
    console.log("Richiesta URL: "+event.request.url);
});