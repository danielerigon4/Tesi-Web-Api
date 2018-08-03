
/* viene chiesto ogni volta se usare o meno la posizione */
function geoFindMe() {
    var output = document.getElementById("out");
  
    //Controlla se Geolocation è supportata
    if (!navigator.geolocation){
      output.innerHTML = "<p>La geolocalizzazione non è supportata dal tuo browser</p>";
      return;
    }
  
    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
  
      output.innerHTML = '<p>Latitudine: ' + latitude + '° <br>Longitudine: ' + longitude + '°</p>';
  
      var img = new Image();
      img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
  
      output.appendChild(img);
    }
  
    function error() {
      output.innerHTML = "Impossibile calcolare la tua posizione";
    }
  
    output.innerHTML = "<p>Locating…</p>";
  
    navigator.geolocation.getCurrentPosition(success, error);
  }