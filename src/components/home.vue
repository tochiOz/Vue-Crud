<template>
  <v-layout justify-center>
    <v-flex xs12 sm8>
        <v-container
          fluid
          grid-list-md>
          <v-layout row>
            <v-flex xs12 sm6>
              <v-card>
                <v-img
                  src="https://www.thenewforestinn.co.uk/wp-content/uploads/2018/05/special-offer.jpg"
                  height="300px">
                  <v-container
                    fill-height
                    fluid
                    pa-2>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <h1><span class="headline deep-orange--text">Price Tag</span></h1>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn>
                      <router-link class="tag" to="/pricetag/editList">Explore</router-link>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12 sm6>
              <v-card>
                <v-img
                  src="https://cdn.vox-cdn.com/thumbor/msZchpvmqFU7RQ0_M_8bqEvahIk=/0x0:5760x3840/1200x675/filters:focal(2420x1930:3340x2850)/cdn.vox-cdn.com/uploads/chorus_image/image/56578693/akrales_170907_1974_0026_02.1504880732.jpg"
                  height="300px">
                  <v-container
                    fill-height
                    fluid
                    pa-2>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <h1><span class="headline deep-orange--text">To-Do List</span></h1>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn>
                      <router-link class="tag" to="/todo/view">Explore</router-link>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      
    })
  }
</script>

<style scoped>
  .tag{
    color: orangered;
    text-decoration: none;
  }
</style>
