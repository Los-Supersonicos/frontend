<template>
  <div class="App"/>
</template>

<script>
import gmapsInit from '../utils/gmaps';
var infoWindow
var map
var pos = {
              lat: -37.0258667,
              lng: -81.5996656
            };
export default {
  name: 'App',
  async mounted() {
    try {
      const google = await gmapsInit();
      
      infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setZoom(13)
            map.setCenter(pos);
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);

            
          }, function() {
            handleLocationError(true, infoWindow,map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      map = new google.maps.Map(this.$el);
    } catch (error) {
      console.error(error);
    }
  },
};
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
//function FetchMarkers() {
//      }
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.App {
  width: 100vw;
  height: 100vh;
}
</style>

