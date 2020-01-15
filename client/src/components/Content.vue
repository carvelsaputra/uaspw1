<template>
    <v-container class="content-1 rounded-card">
        <v-row>
            <v-card
                    width="100%"
                    class="ma-3 pa-5 rounded-card "
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
                            <v-img class="img-profile" height="300" width="200" :src="item.foto"></v-img>
                        </v-col>
                        <!-- kolom kanan -->
                        <v-col>
                            <v-row>
                                <v-col cols="2">
                                    <p class="headline">Nama </p>
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
                            <v-footer class="v-footer" style="background: none; float: right;margin-top:auto;">
                                <p class="pa-1 socmed" style="margin-top: 6%">Social Media :</p>
                                <v-btn
                                        v-for="(icon,i) in icons"
                                        :key="i"
                                        icon
                                        class="mx-4"
                                v-bind:href="items.urlIG">
                                    <v-img width="24px"
                                           :src="icon.icon" class="icon-btn"></v-img>
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
    import axios from 'axios'

    export default {
        name: 'Content',
        data: () => ({
            items: [
                {
                    nama: "Carvel Saputra Martaloho",
                    npm: "1822250008",
                    foto: require("../../../server/data/profile/bagas.jpeg"),
                    desc: "Halo, saya Carvel Saputra Martaloho prodi TI angkatan 2018.. saya lahir di Palembang, SD di Xaverius 4, SMP Xaverius Maria, dan SMA di Xaverius 3"
                },
                {
                    nama: "Jonathan Tanuwijaya",
                    npm: "1822250010",
                    foto: require("../assets/logo.png")
                },
                {
                    nama: "Edward Agustria",
                    npm: "1822250021",
                    desc:"BELI SEPATU DI @MEVVAHSTUFF.ID",
                    foto: require("../assets/profile/titi.jpeg")
                },
                {
                    nama: "Ricky Yohannes",
                    npm: "1822250010",
                    foto: require("../assets/profile/ricky.jpeg")
                },
                {
                    nama: "Richardo Anggara",
                    npm: "1822250010",
                    foto: require("../assets/profile/dodo.jpeg")
                },
                {
                    nama: "Refaldy Bagas Riyanto",
                    npm: "1822250010",
                    foto: require("../assets/profile/bagas.jpeg")
                }
            ],

            icons:
                [
                    {
                        icon: require("../assets/sosmed/instagram.png")
                    },
                    {
                        icon: require("../assets/sosmed/facebook.png")
                    }
                ]


        }),
        created() {
            axios
                .get("http://localhost:8081/")
                .then(res => {
                        // this.items = res.data;
                        console.log(res.data)
                    }
                ).catch(error => {
                console.log(error)
            })

        }
    }
</script>
<style scoped>
    * {
        color: white;
    }
    .socmed{
        font-family: "Century Gothic";
    }
    .icon-btn{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        border-radius: 10px;
    }
    .img-profile{
        border-radius: 8px;
    }
    .content-1 {
        background-color: #8500cc
    }

    .rounded-card {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        border-radius: 10px;
        padding: 20px;
    }
    #tes {
        background-color: #1976D2;
    }
</style>
