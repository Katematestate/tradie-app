<script setup>
import InputText from "primevue/inputtext";
import Button_Main from "./Button.vue";
import modalMixin from "../mixins/modalMixin.vue";
</script>

<template>
  <div class="relative">
    <div @click="toggleModal" class="screen-background"></div>
    <div class="modal-container">
      <div class="flex">
        <h1 class="spacing-large-top">Log In</h1>
      </div>
      <div class="flex flex-col spacing-standard-textbox">
        <p>Email</p>
        <InputText
          v-model="email"
          class="input-class-box"
          placeholder="Email"
        />
      </div>
      <div class="flex flex-col spacing-standard-textbox">
        <p>Password</p>
        <InputText
          v-model="password"
          type="password"
          class="input-class-box"
          placeholder="Password"
        />
      </div>
      <div>
        <a class="flex" href="#">Forgot Your Password?</a>
      </div>
      <div class="flex flex-row spacing-large-top">
        <a href="" class="secondary">Client Sign up</a>
        <p>or</p>
        <a href="" class="secondary">Tradie Sign up</a>
      </div>
      <div class="spacing-standard flex spacing-large-bottom">
        <Button_Main label="Log In" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mixins: [modalMixin],
};
</script>

<style scoped lang="scss">
.relative {
  position: relative;
}
.screen-background {
  width: 100vw;
  height: 100vh;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
p {
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 0;
  margin-bottom: 0;
}
.modal-container {
  border: black solid 2px;
  border-radius: 5px;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  z-index: 1000;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
.spacing-large-top {
  padding-top: var(--spacing-large);
}
.spacing-large-bottom {
  padding-bottom: var(--spacing-large);
}
.spacing-standard {
  padding: var(--spacing-standard);
}
.spacing-standard-textbox {
  padding-left: var(--spacing-large);
  padding-right: var(--spacing-large);
  padding-bottom: var(--spacing-standard);
}
.flex {
  display: flex;
  justify-content: center;
}
.flex-col {
  flex-direction: column;
}
.flex-row {
  flex-direction: column;
}
.secondary {
  color: var(--color-primary);
}
.secondary:hover {
  color: var(--color-brand);
  transition: 0.4s;
}
</style>
