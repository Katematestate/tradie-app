<script setup>
defineProps({ comment: String, businessName: String, rating: Number });
</script>

<template>
  <div class="review-card panel flex flex-column">
    <p>{{ comment }}</p>
    <div class="card-footer flex justify-content-between align-items-center">
      <strong>{{ businessName }}</strong>
      <div class="rating flex align-items-center gap-1">
        <span>{{ rating }}</span>
        <i class="pi pi-star-fill text-brand"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-card {
  max-width: 50ch;
  margin: auto;
  height: 100%;
}
.card-footer {
  margin-top: auto;
}
</style>
