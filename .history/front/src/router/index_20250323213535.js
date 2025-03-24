import { createRouter, createWebHistory } from 'vue-router';
import Formulaire from '@/components/Formulaire.vue';
import Cuisine from '@/views/Cuisine.vue';
import Utilisateur from '@/views/Utilisateur.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Formulaire
  },
  {
    path: '/cuisine',
    name: 'cuisine',
    component: Cuisine
  },
  {
    path: '/user/:name',
    name: 'user',
    component: Utilisateur
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
