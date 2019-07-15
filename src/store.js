import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
state: {
  users: null
},

mutations: {
  SET_USERS(state, payload) {
    return state.users = payload
  }
},

actions: {
  resgisterUser({commit}, payload) {
    //   Vue.http.post('http://localhost:7000/users/register', payload)
    //   .then((res) => {
    //     return console.log('success ' + res)
    //     commit('SET_USERS', payload.token)
    //   })
    // .catch ((err) => {
    //   return console.log('this is error ' + JSON.stringify(err))
    // })
  },

  loginUser({commit}, payload) {

  }
},

getters: {
  loadUsers(state) {
    return state.users
  }
}
})
