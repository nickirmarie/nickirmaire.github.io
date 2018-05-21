// As a User
// When I view the site
// I see a map

// As a User
// When I view the site
// I expect to only see NYC

// As a User
// When I view the site
// I want to see a marker on NYC

// Bonus:

// As a User
// When I view the map
// I want to see the terrain view

// More Bonus:

// As a User
// When I press a button
// I see 3 markers appear on the map

// Unbelievable, Seriously???? Bonus

// As a User
// When I view the site
// All the CitiBike NYC stations appear on the map as markers

// Hint: Make sure to use this URL: https://api.citybik.es/v2/networks/citi-bike-nyc

// AIzaSyCAaRf4Bk4r-QiUbsnowNSq1QLfD3mibq8
function initMap() {
  var mapElem = document.getElementById("map");
  var nyc = {lat: 40.7128, lng: -74.0060};

  var map = new google.maps.Map(mapElem, {
    zoom: 13,
    center: nyc
  });

  var marker = new google.maps.Marker({
    position: nyc,
    map: map
  });
}