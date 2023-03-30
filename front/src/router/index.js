// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// App.vue will be redirected to linked components via <router-links>
// as a convention we will create new folder in 'src' named 'views' and place components to be linked in there
// components related to those links needs to be defined below both for import and routes[] array
import Home from '../views/Home.vue'
import ClientSignup from '../views/ClientSignup.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/ClientSignup',
        name: 'ClientSignup',
        component: ClientSignup
    },
    // add more routes here

]
// code below is NOT to be edited
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router