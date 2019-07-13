import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faMusic,
  faListUl,
  faPlay,
  faCheck,
  faTimes,
  faStopwatch,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
// import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faHome,
  faChartBar,
  faMusic,
  faListUl,
  faPlay,
  faCheck,
  faTimes,
  faStopwatch,
  faPlus
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import Vuex from "vuex";
import store from "./store";
Vue.use(Vuex);

import VueSweetalert2 from "vue-sweetalert2";
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
