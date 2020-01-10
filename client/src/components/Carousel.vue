<template>
    <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
    >
        <v-carousel-item
                v-for="(slidemhs, i) in mahasiswa"
                :key="i"
        >
            <v-sheet
                    :color="colors[i]"
                    height="100%"
            >
                <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                >
                    <div class="display-3">{{ slidemhs.nama }}</div>
                </v-row>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>


</template>
<script>
    import axios from 'axios'

    export default {
        name: 'Carousel',
        data() {
            return {
                colors: [
                    'indigo',
                    'warning',
                    'pink darken-2',
                    'red lighten-1',
                    'deep-purple accent-4',
                    'primary'
                ],
                mahasiswa: [],
                // slides: [
                //     'Carvel Saputra Martaloho',
                //     'Jonathan Tanuwijaya',
                //     'Edward Agustria',
                //     'Ricky Yohannes',
                //     'Richardo Anggara',
                //     'Refaldy Bagas Riyanto'
                // ],
            }
        },
        created() {
            axios
                .get("http://localhost:8081/")
                .then(res => {
                        this.mahasiswa = res.data;
                        console.log(res.data)
                    }
                ).catch(error => {
                console.log(error)
            })

        }
    }

</script>
