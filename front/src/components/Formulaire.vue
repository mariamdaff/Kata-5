<template>
  <button class= "bg-black text-white"> Interface Cuisine </button>
  <h3 class="font-bold text-lg mb-4" style="font-family: poppins; font-weight:normal;">Bienvenue sur Adalicious</h3>
  <p>Peux-tu entrer ton nom ?</p>
  <div class="flex gap-2 mb-6">
    <input
      type="text"
      placeholder="Entrez votre nom"
      class="border border-black p-2 "
    >
    <button
      type="submit"
      class="subscribe-btn border-2 border-black px-4 py-2"
    >
      Valider
    </button>
  </div>
</template>

<script>
export default {
  name: "Formulaire"
}
</script>
