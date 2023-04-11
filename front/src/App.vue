<script setup>
import DynamicDialog from "primevue/dynamicdialog";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import modalMixin from "./mixins/modalMixin.vue";
import LoginModal from "./components/LoginModal.vue";
import { def } from "@vue/shared";
</script>

<template>
  <div>
    {{ showModal }}
    <LoginModal v-if="showModal" />
    <NavBar @update:showModal="showModal = $event" />
    <router-view @update:showModal="showModal = $event"></router-view>
    <DynamicDialog />
    <Footer />
  </div>
</template>

<script>
export default {
  mixins: [modalMixin],
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped></style>
