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
import { publications } from "@/api";

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

  created: async function() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      this.location = position.coords;
      this.zoom = 13;
      const response = await publications.fetchAll();
      response.data.features.map((feature) => {
        const [lat, lng] = feature.geometry.coordinates;
        const position = { position: { lat, lng } };
        this.markers.push(position);
      });
    });
  },
};
</script>
