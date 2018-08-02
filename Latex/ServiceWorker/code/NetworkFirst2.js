self.addEventListener('fetch', function(event){ 
		event.respondWith(fetch(event.request).then(function(response) { 		
			cache.put(event.request, response.clone()); 
			return response; 
		}).catch(function() { 
			return caches.match(event.request); 
		}) 
	);
});