if ('serviceWorker' in navigator) { 
	// Path che contiene il Service Worker 
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) { 			 		
	    console.log('Service worker installato correttamente, ecco lo scope:', registration.scope); 
    }).catch(function(error) { 
			console.log('Installazione service worker fallita:', error); 
		});
}