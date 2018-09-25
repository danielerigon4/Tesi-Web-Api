function success(position) {
	document.getElementById('latitude').innerHTML = position.coords.latitude;
	document.getElementById('longitude').innerHTML = position.coords.longitude;
	document.getElementById('position-accuracy').innerHTML = position.coords.accuracy;	
}