<template>
  <div id="app">
    <Logo />
    <Formulaire />
    <!-- <cuisine />
    <utilisateur /> -->
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import Formulaire from '@/components/Formulaire.vue';

export default {
  name: 'App',
  components: {
    Logo,
    Formulaire,
    // cuisine, 
    // Utilisateur
  }
}
</script>
