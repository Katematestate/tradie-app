<script setup>
import InputText from "primevue/inputtext";
import Button_Main from "./Button.vue";
</script>

<template>
  <div class="modal-container">
    <div>
      <h1>Log In</h1>
    </div>
    <InputText v-model="email" class="input-class-box" placeholder="Email" />
    <InputText
      v-model="password"
      type="password"
      class="input-class-box"
      placeholder="Password"
    />
    <Button_Main label />
  </div>
</template>

<style>
.modal-container {
  border: black solid 3px;
}
.text-box-container {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  gap: var(--spacing-standard);

  @media (max-width: 425px) {
    padding: 0 var(--spacing-standard);
  }
}
</style>
