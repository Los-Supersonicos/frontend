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
    <b-form-group id="input-group-1" label="En donde se necesita ayuda?" label-for="input-1">
      <p>Pana aca va el geolocator que tas haciendo</p>
    </b-form-group>

    <!-- Si se hacen categorias, las soportamoss -->
    <!-- <b-form-group id="input-group-3" label="Categoria:" label-for="input-3">
      <b-form-select id="input-3" v-model="publication.category" :options="categories" required></b-form-select>
    </b-form-group>-->

    <b-form-group id="input-group-2" label="Descripcion" label-for="input-2">
      <b-form-textarea
        id="textarea"
        v-model="publication.description"
        placeholder="En que se puede ayudar?"
        rows="3"
        max-rows="6"
        :readonly="disabled"
      ></b-form-textarea>
    </b-form-group>

    <b-button variant="info" @click="addPublication" :disabled="disabled">Publicar</b-button>
  </b-modal>
</template>

<script>
import { publications } from "@/api";
import { getPoint } from "@/geo";

export default {
  name: "PublicationModal",
  methods: {
    addPublication: async function() {
      this.disabled = true;
      await publications.add(this.publication);
      this.disabled = false;
      this.hide();
    },
    hide: function() {
      this.$refs[this.ref].hide();
    }
  },
  props: ["id", "title"],
  data() {
    return {
      publication: {
        description: "",
        type: "N",
        location: getPoint("-35.5860008", "-58.0837458")
      },
      categories: ["Alimentos", "Ropa"],
      disabled: false,
      ref: "add-publication-modal"
    };
  }
};
</script>
