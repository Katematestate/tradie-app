<script setup>
import Button from 'primevue/button';

defineProps({
  type: String, 
  label: String
})
</script>

<template>
  <Button :label="$props.label" :class="$props.type" class="button" raised />
</template>

<style scoped>
.button.secondary{
  background-color: white;
  stroke: #222030 solid 3px;
  min-width: 130px;
  min-height: 40px;
  border-radius: 5px;
  
}
.button.cta{
  background-color: #E88232;
  color: white;
}
</style>
