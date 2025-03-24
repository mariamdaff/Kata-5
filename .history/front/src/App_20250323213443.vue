<template>
  <div id="app">
    <Logo />
    <router-view />
  </div>
</template>

<script setup>
import Logo from '@/components/Logo.vue';
</script>

<script>
export default {
  name: 'App'
}
</script>
