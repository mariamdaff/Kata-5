<template>
  <div id="app">
    <Logo />
    <Formulaire />
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import Formulaire from '@/components/Formulaire.vue';

export default {
  name: 'App',
  components: {
    Logo,
    Formulaire
  }
}
</script>
