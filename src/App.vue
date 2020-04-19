<template>
  <div>
    <Navbar />
    <div id="app">
      <router-view></router-view>
      <div class="footer">
        <div class="container">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.footer {
  background: #ffff;
  padding: 1em;
}
/* .vue-typer {
  color: black !important;
} */
</style>
