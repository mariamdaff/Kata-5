<template>
  <div class="formulaire">
    <h1>Bienvenue sur Adalicious</h1>
    <p>Pour commencer, peux-tu me donner ton prénom :</p>

    <input v-model="name" type="text" placeholder="Entrez votre prénom" />
    <button @click="goToUserPage">Valider</button>

    <button @click="goToCuisinePage">Interface Cuisine</button>
  </div>
</template>

<script setup>
import { useRouter, ref } from 'vue-router'; 

const router = useRouter();
const name = ref(''); // Utilisez ref pour name

function goToUserPage() {
  if (name.value) {
    router.push(`/user/${name.value}`); // Utilisez des backticks
  } else {
    alert('Veuillez entrer un prénom !');
  }
}

function goToCuisinePage() {
  router.push('/cuisine');
}
</script>

<style scoped>
.formulaire {
  text-align: center;
}
input {
  margin-bottom: 10px;
}
button {
  margin: 5px;
}
</style>
