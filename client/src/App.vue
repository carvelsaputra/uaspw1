<template>
  <v-app>
<Navbar/>
    <v-content>
       <Carousel/>
       <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-flex justify-center>
                <p class="headline text-center">Developers Team</p>
      </v-flex>
        
       </v-parallax>
       <v-container style="height: 500px;">
         <v-container fluid>
           <v-row>
            <v-card
              width="100%"
            class="ma-3 pa-6"
            outlined
            tile
          >
            Column
          </v-card>
           </v-row>
         </v-container>
       </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
export default {
  name: 'App',

  components: 
  {
    Navbar,Carousel
  },
 
 
};
</script>
