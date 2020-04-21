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
      :clickable="true"
      :draggable="false"
      @click="selectMarker(m)"
    ></GmapMarker>

    <GmapInfoWindow
      :options="{maxWidth: 300}"
      :position="infoWindow.position"
      :opened="infoWindow.open"
      @closeclick="infoWindow.open=false"
    >
      <div v-html="infoWindow.template"></div>
    </GmapInfoWindow>
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
      infoWindow: {
        position: BUENOS_AIRES,
        open: false,
        template: ""
      },
      center: {
        lat: BUENOS_AIRES.latitude,
        lng: BUENOS_AIRES.longitude
      }
    };
  },
  methods: {
    selectMarker: function(m) {
      this.infoWindow.position = m.position;
      this.infoWindow.template = m.properties.description;
      this.infoWindow.open = true;
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
