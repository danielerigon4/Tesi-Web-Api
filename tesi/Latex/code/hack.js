this.addEventListener ('fetch', function (event) { 
    event.respondWith (new Response ("Intercepted!")); 
}); 