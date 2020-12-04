import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  BootstrapVue,
  IconsPlugin,
  store,
  render: h => h(App)
}).$mount("#app");
