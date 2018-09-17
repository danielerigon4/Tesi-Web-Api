function promiseAny(promises) { 
	return new Promise((resolve, reject) => { 
		promises = promises.map(p => Promise.resolve(p)); 
		promises.forEach(p => p.then(resolve)); 
		promises.reduce((a, b) => a.catch(() => b)).catch(() => reject(Error("All failed"))); 
	});
};
self.addEventListener('fetch', function(event) { 
	event.respondWith( promiseAny([caches.match(event.request), fetch(event.request)]) );
});