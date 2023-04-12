<script setup>
import InputText from "primevue/inputtext";
import Button from "./Button.vue";
</script>

<template>
  <div class="modal-container flex flex-column gap-3">
    <div class="input-group">
      <label for="input-email">Email</label>
      <InputText
        id="input-email"
        v-model="email"
        placeholder="Email"
        type="email"
      />
    </div>

    <div class="input-group">
      <label for="input-password">Password</label>
      <InputText
        id="input-password"
        v-model="password"
        type="password"
        placeholder="Password"
      />
    </div>

    <router-link to="/???">Forgot Your Password?</router-link>

    <div class="flex">
      <router-link @click="closeModal" to="/client/signup"
        >Client sign up</router-link
      >
      <span>&nbsp;or&nbsp;</span>
      <router-link @click="closeModal" to="/tradie/signup">
        Tradie sign up
      </router-link>
    </div>

    <Button
      class="align-self-center"
      v-if="!isLoading"
      label="Log In"
      @click="loginUser()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      error: "",
      email: "",
      password: "",
    };
  },
  inject: ["dialogRef"],
  methods: {
    closeModal() {
      this.dialogRef.close();
    },
    async loginUser() {
      this.error = "";
      if (!this.email || !this.password) {
        this.error = "Please enter all required fields";
        console.error("Please enter all required fields");
        return;
      }

      let response;
      this.isLoading = true;
      try {
        response = await fetch(`${import.meta.env.VITE_API_URL}auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });
      } catch (error) {
        this.error = error;
        console.error(error);
        return;
      } finally {
        this.isLoading = false;
      }

      const data = await response.json();
      console.log(data);

      if (data.token && data.id) {
        sessionStorage.setItem("jwt", data.token);
        sessionStorage.setItem("userId", data.id);
        sessionStorage.setItem("userType", data.userType);

        const event = new Event("sessionStorageUpdated");
        window.dispatchEvent(event);

        if (data.userType === "user") this.$router.push({ name: "TradieList" });
        else if (data.userType === "tradie")
          this.$router.push({ name: "TradieAccountPage" });

        this.closeModal();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.modal-container {
  width: 100%;
  padding-top: var(--spacing-standard);
}
</style>
