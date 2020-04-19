<template>
  <b-form-group
    id="input-group-1"
    label="Donde necesitas la ayuda?"
    label-for="input-1"
  >
    <b-form-input v-model="address" placeholder="Direccion"></b-form-input>
    <b-button @click="getLocation">Buscar</b-button>
  </b-form-group>
</template>

<script>
import { getLatLong } from "@/geo";
export default {
  name: "Geocoder",
  data() {
    return {
      address: "",
      position: null,
    };
  },
  methods: {
    async getLocation() {
      const latLong = await getLatLong(this.address);
      // TODO: Replicate no location found
      if (!latLong) {
        return;
      }
      this.position = latLong ? latLong : null;
      this.$emit("position", latLong);
    },
  },
};
</script>
