import Vue from 'vue'
import App from './App.vue'
import router from './_router/index'
import store from './_store/index'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
