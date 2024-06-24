<template>
    
    <!--Sektions-element med en eventlyssnare som vid klick aktiverar deletefunktinen-->
    <section @click="$emit('deleteAlbum')">
        <!--De olika fälten motsvarar data som hämtas med fetchanrop-->
      <h3>{{ Album.name }}</h3> 
      <h4>{{ Album.artist }}</h4>
      <b>{{ Album.released }}</b> <br><br>
      <!--Boolean översätts till yes eller no-->
      <p>Is this album recommended? <b>{{ Album.recommended === 1 ? 'Yes' : 'No'  }}</b> </p>
       
    </section>
</template>

<script>
export default {
    props: {
        Album: Object
    }

}
</script>

<style scoped>
section {
    min-width: 200px;
    max-width: 800px;
    font-size: 1.2em;
    text-align: center;
    background-color: whitesmoke;
    border: solid black 2px;
    margin-top: 10px;
    padding: 1.2em;
}
</style>