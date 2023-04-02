<script setup>
import Buttons from './components/Button.vue';
</script>

<template>
  <router-view></router-view>
  <CTAbutton/>
</template>
  
<style scoped>
.links-div {
  display: flex;
  gap: 20px;
}
</style>