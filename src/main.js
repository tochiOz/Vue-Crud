import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import AddItem from './components/pricetag/addItem'
import upItem from './components/pricetag/update'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = `https://myapp.firebaseio.com`

Vue.use(VueAxios, axios)

// const base = axios.create({
//   baseURL: `http://localhost:7000`
// })
// Vue.prototype.$axios = axios
// Vue.prototype.$http = base

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.component('app-add', AddItem)
Vue.component('app-upt', upItem)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')



