<script setup>
import DynamicDialog from "primevue/dynamicdialog";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <NavBar />
    <router-view></router-view>
    <DynamicDialog />
    <Footer />
  </div>
</template>

<style scoped></style>
