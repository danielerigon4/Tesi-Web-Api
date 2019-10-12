//options

var positionOptions = {
	enableHighAccuracy: true,
	timeout: 10 * 1000, // 10 seconds
	maximumAge: 30 * 1000 // 30 seconds
};

//SuccessCallback

function success(position) {
	document.getElementById('latitude').innerHTML = position.coords.latitude;
	document.getElementById('longitude').innerHTML = position.coords.longitude;
	document.getElementById('position-accuracy').innerHTML= position.coords.accuracy;
	document.getElementById('timestamp').innerHTML = 			  (new Date(position.timestamp)).toString();
}

//ErrorCallback

function error(positionError) {
	log.innerHTML = 'Error: ' + positionError.message + '<br />' + log.innerHTML;
}

//Chiamate alle funzioni tramite i pulsanti inseriti nella pagina

document.getElementById('ButtonGetPosition').addEventListener('click',function(){
			navigator.geolocation.getCurrentPosition(Success,		  Error,Options);
});
document.getElementById('ButtonWatchPosition').addEventListener('click',function(){
			watchId = navigator.geolocation.watchPosition			      (Success,Error,Options);
});
document.getElementById('ButtonStopWatching').addEventListener('click',function(){
			if(watchId !== null){
				navigator.geolocation.clearWatch(watchId);
			}
});