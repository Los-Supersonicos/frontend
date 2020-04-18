<template>
  <GmapMap
    :center="{
      lat: location.latitude,
      lng: location.longitude,
    }"
    :zoom="zoom"
    map-type-id="terrain"
    style="width: 100vw; height: 100vh;"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center = m.position"
    />
  </GmapMap>
</template>

<script>
const BUENOS_AIRES = { latitude: -37.1307585, longitude: -62.2716898 };
const DEFAULT_ZOOM = 7;
export default {
  name: "Maps",
  data() {
    return {
      markers: [],
      zoom: DEFAULT_ZOOM,
      location: BUENOS_AIRES,
    };
  },

  created: function() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.location = position.coords;
      this.zoom = 13;
    });
  },
};
</script>
