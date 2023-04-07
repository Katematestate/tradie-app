<script setup>
import InputText from "primevue/inputtext";
</script>

<template>
  <section class="help">
    <h1>How Find A Tradie Works</h1>
    <p>Paste Katie's Component Here.....</p>
  </section>
  <section class="sign-up">
    <div class="sign-up-heading">
      <h1>Sign Up</h1>
    </div>

    <div class="image-drop grid-work">
      <h1>Image Drop</h1>
    </div>

    <div class="input grid-work">
      <inputText />
    </div>

    <div class="tradie-key-words">
      <h1>kys</h1>
    </div>
  </section>
</template>

<style scoped>
.grid-work {
  display: grid;
  grid-template-columns: (4, 1fr);
  gap: var(--spacing-standard);
}
</style>
