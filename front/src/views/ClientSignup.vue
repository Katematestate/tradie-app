<script setup>

import InputText from 'primevue/inputtext';

import { ref } from 'vue';

const value = ref(null);

</script>



<template>

<div class="flex-row">
    <div class="margin1 flex">
        <h1> Here is Margin 1</h1>
    </div>


    <div class="flex">
        <div class="card flex justify-content-center">
            <span class="p-float-label">
                <InputText id="username" v-model="value" />
                <label for="username">Username</label>
            </span>
        </div>
    </div>

    <div class="margin2 flex">
        <h1> Here is Margin 2</h1>
    </div>

</div>


                
    
    <div class="links-div">
        <router-link to='/'>Go to Home</router-link>
    </div>
    <h1>CLIENT SIGN UP FOOTER AREA</h1>
</template>

    
<style scoped>
.flex-row{
    display: flex;
    flex-direction: row;
    flex: 1;
}
.flex{
    display: flex;
    flex: 1;
    border: 1px solid magenta;
}
</style>