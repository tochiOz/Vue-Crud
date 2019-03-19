<template>
  <v-container>
    <v-layout row>
      <v-flex offset-sm3 sm6 xs12 mt-20>
        <v-card class="sample">
          <img src="../assets/crud-logo.png" class="logo text-md-center">
          <v-card-title class="text-md-center">
            <div class="headline"><h3>Crud-Application</h3></div>
          </v-card-title>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignUp">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                    class="text--deep-orange"
                    name= "email"
                    label="Email"
                    id="email"
                    v-model="email"
                    type="email"
                    required
                    >
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                    class="text--deep-orange"
                    name= "password"
                    label="Password"
                    id="password"
                    v-model="password"
                    type="password"
                    >
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                    class="text--deep-orange"
                    name= "Confirm Password"
                    label="Confirm Password"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    type="password"
                    :rules="[checkPassword]"
                    required
                    >
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                      <v-btn
                      type="submit"
                      class="deep-orange darken-1"
                      v-model="onSignUp"
                      required
                      dark
                      >
                      Sign Up
                      </v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
      
   

</template>

<script>
import firebase from 'firebase'
export default {
  name: 'signUp',
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    checkPassword () {
      return this.password === this.confirmPassword ? true : 'Password does not match!!'
    }
  },
  methods: {
    onSignUp: function() {
     firebase.auth().createUserWithEmailAndPassword(this.email, this.password )
      .then((user) => {
        window.alert('Account has been created')
        this.$router.replace('/login')
      })
      .catch((err) => {
        alert(err.message)
      })
    }
  }
}
</script>

<style scoped>
  .logo {
    padding: auto;
    height: 100px;
    width: 200px;
  } 
  .create {
    text-align: center;
  }
  .create a{
    font-size: 18px;
    text-decoration: none;
    margin: -5px auto;
    color: orangered;
  }
  .signUp {
    text-decoration: none;
    color: white;
  }
</style>

