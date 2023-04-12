<script setup>
import { Icon } from "@iconify/vue";

defineProps({ items: Array });
</script>

<template>
  <div class="about-grid flex">
    <div
      class="rated-line flex flex-column flex-1"
      v-for="(item, index) in items"
    >
      <h4 class="heading">{{ index + 1 }}. {{ item.heading }}</h4>
      <Icon class="icon align-self-center" :icon="item.icon" />
      <p class="instruction">{{ item.instruction }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
$space: calc(var(--spacing-standard) * 2);
.icon {
  font-size: 100px;
}

.rated-line + .rated-line {
  margin-inline-start: $space;
  padding-inline-start: $space;
  border-left: 2px solid var(--color-primary);
}

@media (max-width: 425px) {
  .about-grid {
    flex-direction: column;

    .rated-line {
      border: none;
    }

    .rated-line + .rated-line {
      border-top: 2px solid var(--color-primary);
      margin-inline-start: 0;
      padding-inline-start: 0;
      margin-top: $space;
      padding-top: $space;
    }
  }
}
</style>
