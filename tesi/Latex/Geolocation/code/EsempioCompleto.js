/*Il codice mostra tutte le informazioni estraibili da Position; a seconda del device sul quale viene effettuata l'interrogazione non saranno tutte sempre disponibili, in tal caso il loro valore sara impostato a null.*/
function success(position) {
	document.getElementById('latitude').innerHTML = position.coords.latitude;
	document.getElementById('longitude').innerHTML = position.coords.longitude;
	document.getElementById('position-accuracy').innerHTML = position.coords.accuracy;	
	document.getElementById('altitude').innerHTML = position.coords.altitude ? position.coords.altitude : 'unavailable';
	document.getElementById('altitude-accuracy').innerHTML = position.coords.altitudeAccuracy ? position.coords.altitudeAccuracy : 'unavailable';
	document.getElementById('heading').innerHTML = position.coords.heading ? position.coords.heading : 'unavailable';
	document.getElementById('speed').innerHTML = position.coords.speed ? position.coords.speed : 'unavailable';
}