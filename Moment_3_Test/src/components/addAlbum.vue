<template>
   <!--Formulär med createfunktion via event-lyssnare på submit-->
   <form @submit.prevent="addAlbum()">
        <label for="name">Namn på album</label>
        <input type="text" name="name" id="name" v-model="A_name">

        <label for="artist">Namn på artist</label>
        <input type="text" name="artist" id="artist" v-model="A_artist">

        <label for="released">Vilket år släpptes albumet?</label>
        <input type="number" name="released" id="released" v-model="A_year">

        <label for="recommended1">Rekommenderas albumet fyll i:</label>
        <input type="checkbox" name="recommended1" id="recommended1" v-model="isChecked">

        <label for="submit">Lägg till album</label>
        <input type="submit" value="submit">
    </form>
<!--Eventuellt felmeddelande: -->
    <h2>{{ the_message }}</h2>
</template>

<script>
export default {
    /*Returnerad data: */
    data() {
        return {
/*För definierar hur fälten ser ut: */
            isChecked: true,
            A_name: "",
            A_artist: "",
            A_year: "",

            formErrors: {
                A_name: false,
                A_artist: false,
                A_year: false
            },

            /*Felmeddelande (default): */
            the_message: ""

        }

    }

    ,

    methods: {
        /*Asynkron metod för att lägga till album via fetch-anrop: */
        async addAlbum() {
/*Kontrollerar längd på inmatning: */
            if (this.A_name.length > 1 && this.A_artist.length > 2) {

                const URL = "http://127.0.0.1:8000/api/album/";

                /*Vad vi skickar till API:n */
                const theBody = {
                    name: this.A_name,
                    artist: this.A_artist,
                    released: this.A_year,
                    recommended: this.isChecked
                }
                const resp = await fetch(URL,
                    {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(theBody)
                    }
                );
                const data = await resp.json();
                /*Nollställer fält: */
                this.A_artist = "";
                this.A_name = "";
                this.A_year = "";

            } else {
                /*Om vi får error visas ett felmeddelande: */
                this.formErrors.A_name = this.A_name.length <= 1;
                this.formErrors.A_artist = this.A_artist.length <= 2;
                this.formErrors.A_year = this.A_year.length <= 3;
                this.the_message = "Kontrollera input för fel. artisten måste ha fler än 1 tecken, Albumet fler än två och utgivningsåret mer än 3."
            }
        }
    }
}
</script>

<style scoped>
form {
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 300px;
    padding: 25px;
}

label {
    margin-top: 15px;
    margin-bottom: 5px;
}

input[type="text"] {
    max-width: 230px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
}

input[type="number"] {
    max-width: 230px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    -moz-appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
}


input[type="checkbox"] {
    max-width: 100px;
    width: 100%;
}
</style>