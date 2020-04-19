<template>
  <b-form-group id="input-group-1" :label="label" label-for="input-1">
    <b-form inline>
      <b-form-input
        @keyup.enter="getLocation"
        v-model="address"
        placeholder="Direccion"
        class="mr-2"
      ></b-form-input>
      <b-button @click="getLocation" class="search-button">Buscar</b-button>
    </b-form>
  </b-form-group>
</template>

<script>
import { getLatLong } from "@/geo";
export default {
  name: "Geocoder",
  props: ["label"],
  data() {
    return {
      address: "",
      position: null
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
    }
  }
};
</script>

<style scoped>
.search-button {
  background-color: #2A3177;
  border-color: #2A3177;
}
</style>