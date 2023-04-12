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
      <router-link to="/client/signup">Client sign up</router-link>
      <span>&nbsp;or&nbsp;</span>
      <router-link to="/tradie/signup"> Tradie sign up </router-link>
    </div>

    <Button class="align-self-center" label="Log In" />
  </div>
</template>

<style scoped lang="scss">
.modal-container {
  width: 100%;
  padding-top: var(--spacing-standard);
}
</style>
