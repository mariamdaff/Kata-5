import { createRouter, createWebHistory } from 'vue-router'
import Formulaire from '@/components/Formulaire.vue'
import Cuisine from '@/views/Cuisine.vue'
import Utilisateur from '@/views/Utilisateur.vue'

const routes = [
  {
    path: '/', // Page d'accueil
    name: 'home',
    component: Formulaire
  },
  {
    path: '/cuisine', // Page cuisine
    name: 'cuisine',
    component: Cuisine
  },
  {
    path: '/user/:name', // Page utilisateur avec un paramètre dynamique (:name)
    name: 'user',
    component: Utilisateur
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
