<template>
  <h1>HOME</h1>
  <div class="links-div">
    <router-link :to="{ name: 'ClientSignup' }"
      >Go to Client Signup</router-link
    >
    <router-link :to="{ name: 'Login' }">Go to Client Login</router-link>
  </div>
  <h1>HOME FOOTER AREA</h1>
</template>

<style scoped>
.links-div {
  display: flex;
  gap: 20px;
}
</style>
