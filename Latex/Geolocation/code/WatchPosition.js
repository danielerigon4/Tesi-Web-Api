var watchID = navigator.geolocation.watchPosition(function(position) {
	do_something(position.coords.latitude, position.coords.longitude);
});