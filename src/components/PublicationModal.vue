<template>
  <b-modal :id="id" :title="title" ok-title="Publicar" ok-variant="info" size="lg">
    <p>Pana aca va el geolocator que tas haciendo</p>

    <b-form-group id="input-group-3" label="Categoria:" label-for="input-3">
      <b-form-select id="input-3" v-model="form.food" :options="categories" required></b-form-select>
    </b-form-group>

    <b-form-group id="input-group-2" label="Descripcion" label-for="input-2">
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="En que se puede ayudar?"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-form-group>
  </b-modal>
</template>

<script>
export default {
  name: "PublicationModal",
  methods: {
    onReset: () => {
      console.log("reset form");
    },
    onSubmit: () => {
      console.log("submit form");
    }
  },
  props: ["id", "title"],
  data() {
    return {
      form: {
        name: "zxc",
        food: "qwe"
      },
      categories: ["Alimentos", "Ropa"],
      text: "",
      type: "N",
      show: true
    };
  }
};
</script>
