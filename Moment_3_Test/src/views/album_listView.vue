<template>
    <h2>Musiklistan:</h2>
    <h4>Lägg till album i formuläret under</h4>
    <h5>Radera album genom att klicka på dem</h5>
    <!--Artikel innehållande komponenten för formuläret: -->
    <article>
        <addAlbum></addAlbum>
    </article>
    <!--Artikel innehållande komponenten för album med händelselyssnare som aktiverar raderingsfunktionen-->
    <article>
        <!--Varje enskilt album for-loopas med hjälp av id för att skrivas ut på sidan-->
        <Album @deleteAlbum="deleteAlbum(Album.id)" v-for="Album in Albums" :Album="Album" :key="Album.id" />
    </article>
</template>

<script>
/*Importerar berörda komponenter: */
import Album from "../components/album.vue";
import addAlbum from "../components/addAlbum.vue";

export default {
    /*Skapar dataobjekt för album */
    data() {
        return {
            Albums: [

            ]
        }
    },
    components: {
        Album,
        addAlbum
    },

    methods: {

        /*Fetch anrop med GET-funktion för att läsa in album på sidan */
        async getAlbums() {
            const URL = "http://127.0.0.1:8000/api/album/";
            const resp = await fetch(URL);
            if (!resp.ok) {
                throw new Error(`HTTP error! Status: ${resp.status}`);
            };
            const data = await resp.json();
            console.log(data)
            this.Albums = data;
        },
/*Delete funktion via fetch anrop */
        async deleteAlbum(id) {
            const URL = "http://127.0.0.1:8000/api/album/";
            const resp = await fetch(URL + id, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "content-type": "application/json"
                }
            });

            const data = await resp.json();
            this.getAlbums();
        }
    },

    mounted() {
        this.getAlbums();
    }

}
</script>

<style scoped>
h2,
h4,
h5 {
    text-align: center;
}

article {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}


</style>