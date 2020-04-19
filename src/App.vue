<template>
  <div>
    <Navbar />
    <div id="app">
      <router-view></router-view>
      <div class="footer">
        <div class="container">
          <a v-if="$root.user" href="#" @click.prevent="$root.logout">
            Logout
          </a>
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
  font-family: Open Sans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.footer {
  background: black;
  padding: 1em;
}
</style>
