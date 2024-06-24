  <!--html-->
<template>
<Header />
<main>
  <RouterView />
</main> 
<Footer />
</template>
 
 
 <!--Script-->
<script>
/*Import av berörda komponenter: */
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default{
components:{
  Header,
  Footer,
  RouterLink
}
}
</script>




 <!--CSS-->
<style scoped>


@media (min-width: 1024px) {
 
}
</style>
