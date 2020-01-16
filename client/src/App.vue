<template>
  <v-app>
<Navbar/>
    <v-content>
       <Carousel/>
       <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-flex justify-center>
                <p class="tes">Developers Team</p>
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
  background:url('./assets/background/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
   height: 77%;
   width:100%;
}
 .tes{
        font-size: 4rem;
        text-align: center;
        line-height: 30vh;
        color: #fcedd8;
        background: none;
        font-family: 'Century Gothic', cursive;
        font-weight: 800;
        text-shadow: 5px 5px 0px #eb452b,
        10px 10px 0px #efa032,
        15px 15px 5px #46b59b,
        20px 20px 5px #017e7f,
        25px 25px 5px #052939,
        30px 30px 5px #c11a2b,
        35px 35px 5px #c11a2b;
    }
</style>
