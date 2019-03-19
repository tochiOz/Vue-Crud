import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VueFire from 'vuefire'
import * as firebase from 'firebase'
import AddItem from './components/pricetag/addItem'
import upItem from './components/pricetag/update'


Vue.use(VueFire)
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.component('app-add', AddItem)
Vue.component('app-upt', upItem)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyBw-FEwYoS9lQPMtFAS6adyvwBpNdwvwjU",
      authDomain: "simple-vue-crud.firebaseapp.com",
      databaseURL: "https://simple-vue-crud.firebaseio.com",
      projectId: "simple-vue-crud",
      storageBucket: "gs://simple-vue-crud.appspot.com"
    })
  }
}).$mount('#app')



