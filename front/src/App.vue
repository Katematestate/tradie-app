<script setup>
import DynamicDialog from "primevue/dynamicdialog";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <router-view></router-view>
  <DynamicDialog />
</template>

<style scoped></style>
