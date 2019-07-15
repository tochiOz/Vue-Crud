import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import signUp from './views/signUp.vue'
import Home from './components/home.vue'
import EditList from './components/pricetag/editList'
import Todo from './components/todo/todo'
import Editor from './components/todo/editor'


Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/todo/view',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/todo/editor',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/pricetag/view',
      name: 'editList',
      component: EditList,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   if (!currentUser && requiresAuth) {
//       next('/login')
//   } else {
//       next()
//   }
// })
 export default router
