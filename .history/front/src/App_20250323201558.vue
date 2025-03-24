<template>
  <div id="app">
    <Logo />
    <router-view /> <!-- Affiche le composant correspondant à la route -->
  </div>
</template>

<script setup>
import Logo from '@/components/Logo.vue'
</script>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Ajoutez vos styles ici */
</style>
