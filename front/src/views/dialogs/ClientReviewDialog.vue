<script setup>
import Textarea from "primevue/textarea";
import Rating from "primevue/rating";
import Button from "primevue/button";
import { ref } from "vue";

const communicationRating = ref(0);
const efficiencyRating = ref(0);
const skillsRating = ref(0);
const valueRating = ref(0);
</script>

<template>
  <section class="experience flex flex-column">
    <h4>Experience</h4>
    <span>Write a short description of how the job went.</span>
    <Textarea v-model="value" rows="5" cols="30" placeholder="Max 1000 words" />
  </section>

  <section class="star-rating flex flex-column gap-2">
    <h4>Star Rating</h4>
    <div class="panel flex justify-content-between align-items-center">
      <span class="text-bold">Communication</span>
      <Rating v-model="communicationRating" :cancel="false" />
    </div>
    <div class="panel flex justify-content-between align-items-center">
      <span class="text-bold">Efficiency</span>
      <Rating v-model="efficiencyRating" :cancel="false" />
    </div>
    <div class="panel flex justify-content-between align-items-center">
      <span class="text-bold">Skills</span>
      <Rating v-model="skillsRating" :cancel="false" />
    </div>
    <div class="panel flex justify-content-between align-items-center">
      <span class="text-bold">Value</span>
      <Rating v-model="valueRating" :cancel="false" />
    </div>
  </section>

  <div class="button-footer">
    <Button outlined severity="secondary" size="small" label="Update" />
    <Button size="small" label="Post" />
  </div>
</template>

<style scoped>
.header {
  background-color: var(--color-primary);
  color: var(--color-primary-text);
}

h4 {
  margin: 0;
  padding: var(--spacing-small) 0;
}

.button-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: var(--spacing-standard);
  gap: var(--spacing-small);
}
</style>
