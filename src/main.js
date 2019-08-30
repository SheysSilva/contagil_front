import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import router from './router'

require('bootstrap/dist/css/bootstrap.css')
require('bootstrap-vue/dist/bootstrap-vue.css')
require('./assets/css/style.css');

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
