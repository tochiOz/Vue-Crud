<template>
  <v-app id="inspire">
    <v-toolbar app fixed clipped-left dark color="deep-orange darken-1">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">VUE-CRUD-APP</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
        flat 
        v-for="item in navItems" 
        :key="item.title"
        :to="item.link"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
        flat 
        v-if="isAuthenticated"
        @click="onLogOut"
        >
          <v-icon left>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <main>
        <router-view class="view"></router-view>
      </main>
    </v-content>
    <v-footer
    dark
    height="auto">
      <v-card
        class="flex"
        flat
        tile>
        <v-card-title class="deep-orange darken-1">
          &copy;2019 — <strong>Vue-Crud-Firebase</strong>
        </v-card-title>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from 'firebase'
  export default {
    props: {
      source: String
    },

    computed: {
      navItems () {
        if (this.isAuthenticated) {
          return [
            {}
          ]
        }else {
          return [
            { icon: 'face', title: 'Sign In', link: '/login'},
            { icon: 'lock_open', title: 'Sign Up', link: '/signUp'}
          ]
        }
      },
      Created() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            this.user = user
          } else {
            this.user = null
          }
        })
      },
      isAuthenticated () {
        this.user === !null && this.user === !undefined
      }
    
    },
    methods: {
      onLogOut () {
        let auth = firebase.auth()
        auth.signOut()
        this.$router.replace('/login')
      },
      
    }
  }
</script>

<style scoped>
  /* .view {
    margin: 0px;
    padding: 0px;
    width: 100%;
  } */
</style>
