if ('serviceWorker' in navigator) {  
    navigator.serviceWorker.register('/hack.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    })
};