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
              <form @submit.prevent="onLogin">
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
                    dark
                    >Sign In</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <p class="create"><router-link to="/signup">Create a new account</router-link></p>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
      
   

</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onLogin () {
      const loginDetails = {
        email: this.email,
        passsword: this.paassword
      }

      try {
        const res = this.$http.post('/users/login', loginDetails)
        console.log(res)
        return this.$router.push('/')
      } catch (error) {
        return console.log('this is the error' + error)
      }
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
</style>

