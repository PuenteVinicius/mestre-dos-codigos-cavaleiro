import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// eslint-disable-next-line
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

library.add(faUserSecret);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
Vue.use(VueMaterial);
