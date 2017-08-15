function myMap() {
  var mapProp = {
      center: new google.maps.LatLng(47.598222, -122.4324355),
      zoom: 8,
  }
  var map = new google.maps.Map(document.getElementById("seattle"), mapProp);


  var mapProp = {
      center: new google.maps.LatLng(38.929772,121.4706717),
      zoom: 7,
  }
  var map = new google.maps.Map(document.getElementById("dalian"), mapProp);
}
