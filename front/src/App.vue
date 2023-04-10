<script setup>
import DynamicDialog from "primevue/dynamicdialog";
import NavBar from "./components/NavBar.vue";
import LandingPage from "./views/LandingPage.vue";
</script>

<template>
  <NavBar />
  <router-view></router-view>
  <LandingPage />

  <DynamicDialog />
</template>

<style scoped></style>
