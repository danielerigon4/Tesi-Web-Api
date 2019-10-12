function showPosition(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var pos= "Latitude: " + latitude + "Longitude: " + 
        longitude;
    document.getElementById("mydiv").innerHTML = pos;
}
function getLocation(){
    navigator.geolocation.getCurrentPosition                (showPosition);
}
getLocation();