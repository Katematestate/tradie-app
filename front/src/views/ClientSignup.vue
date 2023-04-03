<script setup>

import InputText from 'primevue/inputtext';

import { ref } from 'vue';

const value = ref(null);

</script>



<template>
    <h1>CLIENT SIGN UP</h1>
    <h1>Your Dad</h1>

   

    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <InputText id="username" v-model="value" />
            <label for="username">Username</label>
        </span>
    </div>
                
    
    <div class="links-div">
        <router-link to='/'>Go to Home</router-link>
    </div>
    <h1>CLIENT SIGN UP FOOTER AREA</h1>
</template>

    
<style scoped>
.links-div {
    display: flex;
    gap: 20px;
}
</style>