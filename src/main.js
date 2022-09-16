import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import App from './App.vue'
import router from './router'
import store from './store'


import axios from "axios"
import VueAxios from "vue-axios"

//axios.defaults.baseURL = '/api'

//axios.defaults.withCredentials=false

Vue.config.productionTip = false
Vue.use(VueAxios,axios)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



