<template>
  <section class="section home">
    <div class="container">
      <h1 class="title">¿Quien necesita ayuda?</h1>
      <h1 class="whoText">
        <vue-typer
          :text="texts"
          :repeat="Infinity"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="70"
          :type-delay="70"
          :pre-erase-delay="2000"
          :erase-delay="250"
          erase-style="select-all"
          :erase-on-complete="false"
          caret-animation="blink"
        ></vue-typer>
      </h1>
      <router-link class="button is-dark is-large" style="margin-top: 10px;" to="/bar">Pedir Ayuda</router-link>
    </div>
  </section>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Home",
  components: {
    VueTyper
  },
  data() {
    return {
      texts: [
        "El comedor/merendero del barrio",
        "Un centro de salud primario",
        "Una familia cercana",
        "La escuela de mi barrio"
      ]
    };
  }
};
</script>

<style scoped>
.home {
  text-align: center;
}

.whoText {
  font-size: 3.5rem;
}
</style>