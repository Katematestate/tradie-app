<script setup>
import DynamicDialog from "primevue/dynamicdialog";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import LoginModal from "./components/LoginModal.vue";
</script>

<template>
  <div>
    <NavBar />
    <LoginModal />
    <router-view></router-view>
    <DynamicDialog />
    <Footer />
  </div>
</template>

<style scoped></style>
