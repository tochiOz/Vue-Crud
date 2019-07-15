import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import AddItem from './components/pricetag/addItem'
import upItem from './components/pricetag/update'
import VueResource from 'vue-resource'
// import VueAxios from 'vue-axios'
// import axios from 'axios'

// Vue.use(VueAxios, axios)

// const base = axios.create({
//   baseURL: `http://localhost:7000`,
//   // proxy: {
//   //   host: '127.0.0.1',
//   //   port: 7000
//   // }
// })

// Vue.prototype.$auth = base
Vue.use(VueResource)
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.component('app-add', AddItem)
Vue.component('app-upt', upItem)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')



