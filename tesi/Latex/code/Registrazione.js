if('serviceWorker' in navigator){ 
	navigator.serviceWorker.register('/service-worker.js').then(function(registration){ 			 		
		// Il Service worker è installato correttamente 
	 }).catch(function(error){ 
				// La registrazione del Service Worker non è 				    andata a buon fine
			});
}