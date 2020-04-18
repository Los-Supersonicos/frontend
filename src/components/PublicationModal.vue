<template>
  <b-modal :id="id" :title="title">
    <pre class="mt-3 mb-0">pana geolocator goes here</pre>

    <b-form-group id="input-group-2" label="Contanos en que se puede ayudar:" label-for="input-2">
      <b-form-textarea id="textarea" v-model="text" placeholder rows="3" max-rows="6"></b-form-textarea>
    </b-form-group>

    <b-form-group id="input-group-3" label="Elegi una categoria:" label-for="input-3">
      <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
    </b-form-group>

    <b-button variant="outline-dark" type="submit">Agregar!</b-button>
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
      text: "",
      type: "",
      show: true
    };
  }
};
</script>
