<template>
  <b-navbar shadow transparent spaced>
    <template slot="brand">
      <b-navbar-item class="brand" tag="router-link" :to="{ path: '/' }">
        <img :src="logoSrc" alt="Lightweight UI components for Vue.js based on Bulma" />
        Nombre Projecto
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <!-- <router-link class="button is-primary is-medium" to="/foo"
            >Dar una mano</router-link
          >
          <router-link class="button is-success is-medium" to="/bar"
            >Pedir una mano</router-link
          >-->
          <b-navbar-item class="brand" tag="router-link" :to="{ path: '/' }">Registrarme</b-navbar-item>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      logoSrc:
        "https://static.vecteezy.com/system/resources/previews/000/585/672/non_2x/vector-hand-help-logo-and-symbols-template-icons-app.jpg"
    };
  }
};
</script>

<style scoped>
.brand {
  color: #3f454d;
}
</style>
