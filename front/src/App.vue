<script setup>
import DynamicDialog from "primevue/dynamicdialog";
import ConfirmPopup from "primevue/confirmpopup";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import LoginModal from "./components/LoginModal.vue";
</script>

<template>
  <div>
    <LoginModal @toggle_modal="toggleModal" v-if="showModal" />
    <NavBar @toggle_modal="toggleModal" />
    <router-view></router-view>
    <Footer />
    <DynamicDialog />
    <ConfirmPopup />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
      console.log(this.showModal);
    },
  },
  created() {
    window.addEventListener("show-login-modal", () => {
      this.showModal = true;
    });
  },
};
</script>

<style scoped></style>
