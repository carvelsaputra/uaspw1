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
              <v-col id="tes">
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
                   <v-footer>
                     <v-btn 
                     v-for="(icon,i) in icons"
                     :key="i"
                     icon
                     class="mx-4">
                      <v-img width="24px" 
                      :src="icon.icon"></v-img>
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
        items:[
            {
              nama:"Carvel Saputra Martaloho",
              npm:"1822250008",
              foto:require("../assets/profile/CarvelSaputraMartaLoho.jpg"),
              desc:"Halo, saya Carvel Saputra Martaloho prodi TI angkatan 2018.. saya lahir di Palembang, SD di Xaverius 4, SMP Xaverius Maria, dan SMA di Xaverius 3"
            },
            {
              nama:"Jonathan Tanuwijaya",
              npm:"1822250010",
              foto:require("../assets/logo.png")
            },
             {
              nama:"Edward Agustria",
              npm:"1822250010",
              foto:require("../assets/profile/titi.jpeg")
            },
            {
              nama:"Ricky Yohannes",
              npm:"1822250010",
              foto:require("../assets/profile/ricky.jpeg")
            },
            {
              nama:"Richardo Anggara",
              npm:"1822250010",
              foto:require("../assets/profile/dodo.jpeg")
            },
            {
              nama:"Refaldy Bagas Riyanto",
              npm:"1822250010",
              foto:require("../assets/profile/bagas.jpeg")
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

        ]
          
        

    })
}
</script>
<style  scoped>
*{
  color:white;
}
.content-1
{
  background-color: purple
}
.rounded-card{
    border-radius:10px;
}
#tes{
  background-color: #1976D2
}


</style>