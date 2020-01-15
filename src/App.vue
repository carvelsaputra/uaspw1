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
       <v-container class="main-content" fluid gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
        <Content/>
       </v-container>
       <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Content from './components/Content';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: 
  {
    Navbar,Carousel,Content,Footer
  },
 
 
};
</script>
<style scoped>
.main-content
{
  background:url('./assets/background/wp2778609-polygonal-wallpapers.jpg');
  background-repeat: no-repeat;
  background-size: cover;
   height: 77%;
   width:100%;
}

</style>