<template>
    <div>
      <img :src="logo" alt="logo du site" />
    </div>
  </template>
  
  <script>
  import logo from '@/assets/logo.jpg'
  
  export default {
    name: "Logo",
    data() {
      return {
        logo: logo
      }
    }
  }
  </script>
  