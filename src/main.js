import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

import Home from "./components/Home";
import maps from "./components/Maps"

const routes = [{ path: "/", component: Home }, { path: "/Maps", component: maps } ];


const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
