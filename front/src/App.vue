<template>
  <div id="app">
    <Logo />
    <Formulaire />
    <cuisine />
    <utilisateur />
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import Formulaire from '@/components/Formulaire.vue';
import cuisine from '@/views/cuisine.vue';
import utilisateur from '@/views/utilisateur.vue';

export default {
  name: 'App',
  components: {
    Logo,
    Formulaire,
    cuisine, 
    utilisateur
  }
}
</script>
