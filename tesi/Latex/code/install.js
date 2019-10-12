if('serviceWorker' in navigator){  
  navigator.serviceWorker.register(
    this.addEventListener('fetch', function (event){ 
        event.respondWith(new Response("Intercepted!")); 
    })
  ).then(function(registration) {
    // Service Worker installato correttamente
   })
};