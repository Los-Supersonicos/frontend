<template>
  <GmapMap
    :center="center"
    :zoom="zoom"
    map-type-id="terrain"
    :style="`max-width: ${this.width}vw; height: ${this.height}vh;`"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="false"
      :draggable="false"
      @click="(m)"
    >
      <GmapInfoWindow :opened="true">{{ m.properties.description }}</GmapInfoWindow>
    </GmapMarker>
  </GmapMap>
</template>

<script>
import { publications } from "@/api";

const BUENOS_AIRES = { latitude: -37.1307585, longitude: -62.2716898 };
const DEFAULT_ZOOM = 7;

export default {
  name: "Maps",
  props: {
    width: {
      type: String,
      default: "100"
    },
    height: {
      type: String,
      default: "100"
    },
    markersProp: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      markers: [...this.markersProp],
      zoom: DEFAULT_ZOOM,
      location: BUENOS_AIRES,
      center: {
        lat: BUENOS_AIRES.latitude,
        lng: BUENOS_AIRES.longitude
      }
    };
  },
  methods: {
    selectMarker: function(m) {
      this.center = m.position;
    }
  },
  watch: {
    markersProp: function() {
      this.markers = [...this.markersProp];
      this.center = this.markersProp[this.markersProp.length - 1].position;
    }
  },
  created: async function() {
    console.log(this.markers);

    navigator.geolocation.getCurrentPosition(async position => {
      this.location = position.coords;
      this.zoom = 13;
      this.center.lat = this.location.latitude;
      this.center.lng = this.location.longitude;
      const response = await publications.fetchAll();
      response.data.features.map(feature => {
        const [lat, lng] = feature.geometry.coordinates;
        const marker = {
          position: { lat, lng },
          properties: feature.properties
        };
        this.markers.push(marker);
      });
    });
  }
};
</script>
