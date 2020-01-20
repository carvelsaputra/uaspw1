<template>
      <div id="home">
        <v-app-bar fixed app dark>
            <v-toolbar-title><span class="headline">Ujian Akhir Semester</span></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <div class="tes"> 
               <a href="#home"> <v-btn text large><span class="menu">Home</span></v-btn></a>
               <a href="#about"><v-btn text large><span class="menu">About</span></v-btn></a>
              </div>
            </v-toolbar-items>
        </v-app-bar>
      </div>
     
</template>

<script>
export default {
    name: 'Navbar',
    
    data: () => ({
      
  }),
};
</script>

<style>
html
{
    scroll-behavior: smooth;
}
 *
{
    font-family: "Century Gothic";
}
a{
  text-decoration: none;
}
.menu
{
   color: white
}
.tes
{
margin-top:10px;
}
</style>