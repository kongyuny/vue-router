import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/img/bass.css'
import axios from 'axios'

Vue.prototype.$ajax = axios
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
