<template>
    <div class="utilisateur">
      <h1>Bonjour, {{ userName }} !</h1>
      <p>Bienvenue sur ta page personnelle.</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const userName = route.params.name 
  </script>
  
  <style scoped>
  .utilisateur {
    text-align: center;
  }
  </style>
  