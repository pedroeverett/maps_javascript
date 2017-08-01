var initialize = function() {
  var mapDiv = document.querySelector('#main-map');
  var center = {lat: 51.512245, lng: -0.127417}
  var tower = {lat:51.505467, lng: -0.075414 }
  var lisbon = {lat:38.728609, lng: -9.138577}
  
  var towerContentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Tower Bridge</h1>'+
  '<div id="bodyContent">'+
  '<p><b>Tower Bridge</b>, is a nice bridge. ' 
  '</div>';

  // var changeCenter = function(center) {
  //     mainMap.setCenter(center);
  //     marker.setPosition(center);
  // }

  var infowindow = new google.maps.InfoWindow({
   content: towerContentString
 });
  var mainMap = new MapWrapper(mapDiv, center, 10)

  mainMap.addClickEvent();

  mainMap.addMarker(center);
  mainMap.addMarker(tower, function(){
    infowindow.open(mainMap.googleMap, this);
  })

  var bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  var lisbonButton = document.querySelector('#button-lisbon');
  lisbonButton.addEventListener('click', function(){mainMap.changeCenter(lisbon)});
}

window.addEventListener('load', initialize);