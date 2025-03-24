<template>
  <div class="cuisine">
    <h1>Bienvenue dans la cuisine !</h1>
    <p>C'est ici que nous préparons des plats délicieux.</p>
    
    <router-link to="/">Retour à l'accueil</router-link> <!-- Lien vers l'accueil -->
  </div>
</template>

<script>
export default {
  name: 'Cuisine'
}
</script>

<style scoped>
/* Ajoutez vos styles ici */
.cuisine {
  text-align: center;
}
</style>
