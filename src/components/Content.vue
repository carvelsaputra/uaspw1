<template>
     <v-container  class="content-1 rounded-card">
           <v-row>
            <v-card
              width="100%"
              class="ma-3 pa-6 rounded-card "
              outlined
              tile
              center
              v-for="(item,i) in items"
              :key="i"
            >

              <v-col id="tes" v-bind:style="{backgroundColor:item.colors}">
                <v-row>
                  <!-- kolom kiri -->
                  <v-col cols="4">
                    <v-img height="300" width="200" :src="item.foto" ></v-img>
                  </v-col>
                  <!-- kolom kanan -->
                  <v-col>
                    <v-row>
                      <v-col cols="2">
                        <p class="headline">Nama  </p>
                      </v-col>
                      <v-col cols="1"><p class="headline">:</p></v-col>
                      <v-col cols="9">
                        <p class="headline">{{item.nama}}</p>
                      </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="2">
                          <p class="headline">NPM</p>
                        </v-col>
                        <v-col cols="1"><p class="headline">:</p></v-col>
                        <v-col cols="6">
                          <p class="headline">{{item.npm}}</p>
                        </v-col>
                    </v-row>
                   <p>
                     {{item.desc}}
                   </p>
                   <v-footer class="rounded-card" color="green accent-1">
                     <p class="title" style="color:#00E676">Social Media : </p>
                     <v-btn 
                     v-for="(icon,i) in icons"
                     :key="i"
                     icon
                     class="mx-4">
                     
                      <v-img width="30px" 
                      :src="icon.icon" class="mx-4"></v-img>
                      <v-divider  vertical ></v-divider>
                     </v-btn>
                   </v-footer>
                  </v-col>
                </v-row>
              </v-col>
            </v-card>
           </v-row>
           
     </v-container>
</template>
<script>
export default {
    name:'Content',
    data:()=>({
        items:
        [
            {
              id:1,
              nama:"Carvel Saputra Martaloho",
              npm:"1822250008",
              foto:require("../assets/profile/CarvelSaputraMartaLoho.jpg"),
              desc:"Halo, saya Carvel Saputra Martaloho prodi TI angkatan 2018.. saya lahir di Palembang, SD di Xaverius 4, SMP Xaverius Maria, dan SMA di Xaverius 3",
              colors:'#3F51B5'

            },
            {
              id:2,
              nama:"Jonathan Tanuwijaya",
              npm:"1822250010",
              foto:require("../assets/logo.png"),
              desc:'tes',
              colors:'#FB8C00'
            },
            {
              id:3,
              nama:"Edward Agustria",
              npm:"1822250010",
              foto:require("../assets/profile/titi.jpeg"),
              desc:'tes bro',
              colors:'#C2185B'
            },
            {
              id:4,
              nama:"Ricky Yohannes",
              npm:"1822250010",
              foto:require("../assets/profile/ricky.jpeg"),
              desc:'tes lagi',
              colors:'#EF5350'
            },
            {
              id:5,
              nama:"Richardo Anggara",
              npm:"1822250010",
              foto:require("../assets/profile/dodo.jpeg"),
              desc:'tes terus',
              colors:'#6200EA'
            },
            {
              id:6,
              nama:"Refaldy Bagas Riyanto",
              npm:"1822250010",
              foto:require("../assets/profile/bagas.jpeg"),
              desc:'terakhir tesnya',
              colors:'#3F51B5'
            }

        ],
        icons:
        [
          {
            icon:require("../assets/sosmed/instagram.png")
          },
          {
            icon:require("../assets/sosmed/facebook.png")
          }
        ],
      
          
        

    })
}
</script>
<style  scoped>
*
{
  color:white;
}
.content-1
{
  background-color: purple
}
.rounded-card
{
    border-radius:10px;
}
/* #tes
{
  background-color: #1976D2
} */


</style>