<script setup>
import Button from "primevue/button";
import { computed } from "vue";

const props = defineProps({
  type: String,
  label: String,
});

const buttonSeverity = computed(() => {
  if (props.type === "secondary") {
    return "secondary";
  }
  return "primary";
});
</script>

<template>
  <Button
    :label="$props.label"
    :severity="buttonSeverity"
    :outlined="type === 'secondary'"
    class="button"
  />
</template>

<style scoped></style>
