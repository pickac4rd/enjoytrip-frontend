import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/api/BootstrapVue.js";
import "@/api/fontawesomeVue.js";
import "@/api/aos.js";
import "@/api/glightbox.js";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

require("@/assets/styles/main.css");
require("@/assets/styles/variables.css");

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueSweetalert2);
Vue.use(BootstrapVue)
Vue.use(router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
