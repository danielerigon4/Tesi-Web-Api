self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('v2').then(function(cache) {
			return cache.addAll([
				'/sw-test/',
				'/sw-test/index.html',
				'/sw-test/style.css',
				'/sw-test/app.js',
				'/sw-test/image-list.js',
				...
			]);
		})
	);
});