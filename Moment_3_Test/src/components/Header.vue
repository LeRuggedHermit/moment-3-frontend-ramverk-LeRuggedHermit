<template>
    <header>
        <div class="headerbox"><img src="../assets/logo.png" alt="logotyp"></div>
        <div class="headerbox">
            <h1>Sibr2200 rekommenderar musikalbum</h1>
        </div>
        <div class="headerbox">
            <nav>
                <ul>
                    <!--Navigering via routingsystemet med routerlinks till olika views:-->
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Musikalbum">Musikalbum</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/OmVue">Om Vue</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <div class="banner">
        <img src="../assets/vinyl.webp" alt="sid-baner">
    </div>
</template>

/Musikalbum

<script>
import { RouterLink } from 'vue-router'
export default {
    components: {
        RouterLink
    }
}
</script>

<style>
header {
    width: 100%;
    background-color: black;
    color: rgb(239, 194, 194);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
}

li,
RouterLink {
    list-style: none;
    color: rgb(239, 194, 194);
    margin-left: 10px;
    margin-right: 10px;
    font-size: 1.2em;
}

nav {
    width: 230px;
}

ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    font-size: 1.2em;
    margin-right: 100px;
}

.headerbox img {
    width: 70px;
    height: 70px;
    margin-left: 25px;
    border: solid whitesmoke 3px;
    border-radius: 50px;
    padding: 4px;
}

.banner img {
    width: 100%;
    height: 350px;
}

@media (max-width: 900px) {

    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
    }

    .headerbox img {
        display: none
    }

    .headerbox{
        width: 100%;
    }
    .banner {
        display: none;
    }

    nav{
        width: 100%;
    }

    ul{
        margin-right: 0;
    }

    li,
    RouterLink {
        list-style: none;
        color: rgb(239, 194, 194);
        margin-left: 10px;
        margin-right: 10px;
        font-size: 0.9em;
       
    }

    h1 {
        font-size: 1.3em;
    }
}
</style>