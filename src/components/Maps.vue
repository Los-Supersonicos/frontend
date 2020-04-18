<template>
  <div class="App"/>
</template>

<script>
import { publications } from "@/api";
import gmapsInit from '@/utils/gmaps';
var infoWindow
var map
var pos = {
              lat: -37.0258667,
              lng: -81.5996656
            };
export default {
  name: 'App',
  async created() {

  },
  data() {
        return {
            google: ''
        }
    },
  async mounted() {
    try {
      var google = await gmapsInit();
      

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setZoom(15)
            map.setCenter(pos);
            fetchMarkers()
            
          }, function() {
            handleLocationError(true, infoWindow,map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      map = google.maps.Map(this.$el);
    } catch (error) {
      console.error(error);
    }
    this.google = google
  },
};
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
async function fetchMarkers() {
    const response = await publications.fetchAll()
    console.log(response)
    response.data.features.map(x => {
        publicationToMarker(x)
    })
      }
function publicationToMarker(publication){
    console.log(publication.geometry.coordinates)
    pos = publication.geometry.coordinates
    this.google.maps.Marker({position: {lat: pos[0], lng: pos[1]}, map: map});
}
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

