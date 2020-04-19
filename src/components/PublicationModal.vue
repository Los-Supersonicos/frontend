<template>
  <b-modal
    :id="id"
    :title="title"
    ok-title="Publicar"
    ok-variant="info"
    size="lg"
    hide-footer
    :ref="ref"
  >
    <Geocoder @position="setPosition" label="Donde necesitas la ayuda?" />
    <Maps width="50" height="50" :markersProp="markersProp"/>

    <b-form-group id="input-group-2" label="Descripcion" label-for="input-2" v-if="publication.location">
      <b-form-textarea
        id="textarea"
        v-model="publication.description"
        placeholder="En que se puede ayudar?"
        rows="3"
        max-rows="6"
        :readonly="disabled"
      ></b-form-textarea>
    </b-form-group>

    <b-button variant="info" @click="addPublication" :disabled="disabled" v-if="publication.location"
      >Publicar</b-button
    >
  </b-modal>
</template>

<script>
import { publications } from "@/api";
import { getPoint } from "@/geo";
import Geocoder from "@/components/Geocoder";
import Maps from "@/components/Maps2";


export default {
  name: "PublicationModal",

  components: {
    Geocoder,
    Maps,
  },

  methods: {
    async addPublication() {
      if (!this.$root.user) {
        await this.$root.login();
      }
      this.disabled = true;
      await publications.add(this.publication, { token: this.$root.jwt });
      this.disabled = false;
      this.hide();
    },
    setPosition: function(position) {
      const { lat, lng } = position;
      const point = getPoint(lat, lng);
      this.location = point;
      this.publication.location = point;
      this.marker = {
          position: { lat, lng },
          properties: {
            description: "Aqui",
          }
      };
      this.markersProp = [this.marker]
      console.log(this.marker)
      console.log("POINT ", point);
    },
    hide: function() {
      this.$refs[this.ref].hide();
    },
  },

  props: ["id", "title"],

  data() {
    return {
      publication: {
        description: "",
        type: "N",
        location: null,
      },
      marker: {},
      categories: ["Alimentos", "Ropa"],
      disabled: false,
      ref: "add-publication-modal",
      markersProp: [],
    };
  },
};
</script>
