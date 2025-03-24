<template>
    <div class="utilisateur">
      <h1>Bonjour, {{ userName }} !</h1>
      <p>Bienvenue sur ta page personnelle.</p>
      
      <router-link to="/">Retour à l'accueil</router-link> <!-- Lien vers l'accueil -->
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const userName = route.params.name // Récupère le paramètre dynamique ":name"
  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  .utilisateur {
    text-align: center;
  }
  </style>
  