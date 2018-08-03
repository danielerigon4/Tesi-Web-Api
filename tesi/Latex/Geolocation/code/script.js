function showPosition(position){
    var pos="Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    document.getElementById("mydiv").innerHTML = pos;
}
function getLocation(){
    navigator.geolocation.getCurrentPosition(showPosition);
}
getLocation();