import Vue from "vue";
import Buefy from "buefy";
import App from "./App.vue";
import VueRouter from "vue-router";
import "buefy/dist/buefy.css";

import Home from "./components/Home";

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(VueRouter);

const routes = [{ path: "/", component: Home }];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
