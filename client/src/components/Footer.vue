<template>
    <v-footer
            dark
            paddless>
        <v-card
                flat
                tile
                class="white--text text-center tes justify-center"
                :style="{left: '50%', transform:'translateX(-50%)'}"
        >
            <v-card-text class="white--text pt-3">
                <p class="title">Kebersamaan adalah permulaan. Menjaga bersama adalah kemajuan. Bekerja bersama adalah keberhasilan.</p>
            </v-card-text>
            <v-divider></v-divider>

            <v-card-text class="white--text">
               <p class="text-right subtitle-1"> — <strong>Henry Ford</strong></p>
            </v-card-text>
        </v-card>
    </v-footer>
</template>
<script>
    export default {
        name:"Footer"
    }
</script>
<style scoped>
    .tes{
        border-radius:10px;
    }
</style>
