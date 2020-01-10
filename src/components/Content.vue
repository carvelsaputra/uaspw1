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
            
              <v-col>
               <v-img height="300" width="200" :src="item.foto" ></v-img>
               <p class="headline">{{item.nama}}</p>
               <p>{{item.npm}}</p>
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
                nama:"carvel saputra",
                npm:"1822250008",
                foto:require("../assets/CarvelSaputraMartaLoho.jpg")
            },
            {
              nama:"Jonathan Tanuwijaya",
              npm:"1822250010",
              foto:require("../assets/logo.png")
            }
        ]
    })
}
</script>
<style  scoped>
.content-1
{
  background-color: purple
}
.rounded-card{
    border-radius:10px;
}
</style>