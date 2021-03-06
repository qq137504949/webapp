import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {DOMLoaded, computedREM} from './assets/js/base'

import './assets/styles/index.scss'
import './assets/fonts/iconfont.css'
import 'swiper/dist/css/swiper.css'

fastclick.attach(document.body);

Vue.use(VueLazyLoad);

Vue.use(VueAwesomeSwiper);

DOMLoaded();
window.addEventListener('resize', computedREM);

Vue.prototype.$http = axios;

Vue.config.productionTip = false;
Vue.prototype.$URL = process.env.API_ROOT;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
