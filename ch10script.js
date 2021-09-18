var waitForUser;

// configure page to display Directions content
function loadDirections(string) {

   document.getElementById("location").style.display = "block";
   //geoTest();
   // to minimize data use, download map only if needed and not already downloaded
   if (typeof google !== 'object') {
     var script = document.createElement("script");
     script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&callback=geoTest";
     document.body.appendChild(script);
   }

}

function geoTest() {
  waitForUser = setTimeout(fail, 10000);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(createDirections, fail, {timeout: 10000});
  } else {
    fail();
  }
}

function createDirections(position) {
  clearTimeout(waitForUser);
  console.log("Longitude: " + position.coords.longitude);
  console.log("Latitude: " + position.coords.latitude);
  var currPosLat = position.coords.latitude;
  var currPosLng = position.coords.longitude;
  var mapOptions = {
    center: new google.maps.LatLng(currPosLat, currPosLng), zoom: 12};
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  document.getElementById("userLocation").innerHTML = "User Location: " + currPosLng + "," +currPosLat;

  }

function fail() {
  //console.log("Geolocation information not available or not authorized.");
  document.getElementById("map").innerHTML = "Unable to access your current location.";
}


window.addEventListener("load", loadDirections);
