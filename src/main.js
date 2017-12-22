// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import Axios from '../src/fetch/fetch.js'
import store from '../src/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'muse-ui/dist/muse-ui.css'
import '../src/js/fontSize.js'
import '../src/js/filter.js'


Vue.config.productionTip = false

Vue.use(MuseUI,VueAwesomeSwiper)
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
