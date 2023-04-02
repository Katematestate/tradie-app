<script setup>
import Buttons from './components/Button.vue';
</script>

<template>
  <router-view></router-view>
  <Buttons label="asdf" type="cta"/>
  <Buttons label="ghjkl" type="secondary"/>
</template>
  
<style scoped>
.links-div {
  display: flex;
  gap: 20px;
}
</style>