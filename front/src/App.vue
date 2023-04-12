<script setup>
import DynamicDialog from "primevue/dynamicdialog";
import ConfirmPopup from "primevue/confirmpopup";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <!-- <LoginModal @toggle_modal="toggleModal" v-if="showModal" /> -->
  <NavBar @toggle_modal="toggleModal" />
  <router-view></router-view>
  <Footer />
  <DynamicDialog />
  <ConfirmPopup />
</template>

<script>
import { useDialog } from "primevue/usedialog";
import LoginModal from "./components/LoginModal.vue";

export default {
  data() {
    return {
      showModal: false,
      dialog: useDialog(),
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
      // this.showModal = true;
      this.dialog.open(LoginModal, { props: { modal: true, header: "login" } });
    });
  },
};
</script>

<style scoped></style>
