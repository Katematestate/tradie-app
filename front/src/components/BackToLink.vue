<script setup>
defineProps({ to: String, label: String });
</script>

<template>
  <router-link :to="to" class="inline-flex align-items-center gap-1 back-link">
    <i class="pi pi-chevron-left"></i><span>{{ label }}</span>
  </router-link>
</template>

<style scoped>
.back-link {
  color: var(--color-primary);
}
</style>
