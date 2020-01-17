<template>
    <v-container class="content-1 rounded-card">
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
                            <v-img class="img-profile" height="300" width="250"
                                   :src="'http://localhost:8081/'+item.foto"/>
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
                            <v-footer class="v-footer rounded-card" style="float: right;margin-top:auto;height:20%;">
                                <p class="pa-1 socmed">Social Media :</p>
                                <v-btn
                                        v-for="(link, link_key) in item.url.sosmed"
                                        :key="link_key"
                                        v-on:click="direct(link.src)"
                                        depressed
                                        class="btn-sosmed"
                                >
                                    <v-img width="30px"
                                           v-if="link.name === 'instagram'"
                                           :src="require('../assets/sosmed/instagram.png')">

                                    </v-img>
                                    <v-img width="30px"
                                           v-if="link.name === 'facebook' "
                                           :src="require('../assets/sosmed/facebook.png')"
                                    >

                                    </v-img>
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
            items:
                [],
        }),

        methods: {
            direct(link) {
                window.location.assign(link)
            }
        },

        created() {
            axios
                .get("http://localhost:8081/")
                .then(res => {
                        this.items = res.data;
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

    .img-profile {
        border-radius: 8px;
    }

    .btn-sosmed {
        margin-top: -22px;
    }

    .socmed {
        color: black;
        font-family: "Century Gothic";
    }

    .content-1 {
        background-color: purple
    }

    .rounded-card {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        border-radius: 10px;
        padding: 20px;
    }


</style>
