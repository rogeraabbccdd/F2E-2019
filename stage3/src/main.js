import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// library.add(faCoffee, faGooglePlus);
// Vue.component("font-awesome-icon", FontAwesomeIcon);

import "material-icons/iconfont/material-icons.css";

Vue.config.productionTip = false;

export const eventBus = new Vue();

const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

window.addEventListener("load", function() {
  vue.$router.replace("/");
});
