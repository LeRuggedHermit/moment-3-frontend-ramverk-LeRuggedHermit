
/*Import av komponenter/views */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import album_listView from '../views/album_listView.vue'
import AboutView from '../views/AboutView.vue'

/*Skapar routing: filväg, namn och avsedd komponent: */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Musikalbum',
      name: 'Musikalbum',
      component: album_listView
    },
    {
      path: '/OmVue',
      name: 'OmVue',
      component: AboutView
    }
  ]
})

export default router
