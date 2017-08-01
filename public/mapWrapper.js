var MapWrapper = function(container, coords, zoom) {
  
  this.googleMap = new google.maps.Map(container, {
    center: coords, 
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype = {
  addMarker: function(coords, callback) {
    var marker = new google.maps.Marker({
      position: coords,
      animation: google.maps.Animation.DROP,
      map: this.googleMap
    });

    marker.addListener("click", callback)

    this.markers.push(marker)
  },
  addClickEvent: function() {
    google.maps.event.addListener(this.googleMap, 'click', function(event) {
      // console.log(event);
      // console.log(event.latLng.lat());
      // console.log(event.latLng.lng());
      var position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      this.addMarker(position);
    }.bind(this));
  },
  bounceMarkers: function() {
    this.markers.forEach(function(marker) {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    })
  },

  changeCenter: function(center) {
    //google.maps.event.addListener(this.googleMap, 'click', function() {
      this.googleMap.setCenter(center);
      this.addMarker(center);
      
   // })
  }
}