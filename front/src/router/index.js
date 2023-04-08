// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
// App.vue will be redirected to linked components via <router-links>
// as a convention we will create new folder in 'src' named 'views' and place components to be linked in there
// components related to those links needs to be defined below both for import and routes[] array
import Home from "../views/Home.vue";
import ClientSignup from "../views/ClientSignup.vue";
import TradieList from "../views/TradieListPage.vue";
import TradieAccountEdit from "../views/TradieAccountEdit.vue";
import TradieAccountPage from "../views/TradieAccountPage.vue";
import TradieSignup from "../views/TradieSignup.vue";

import ClientHubPage from "../views/ClientHubPage.vue";

import userAuth from "./middlewares/userAuth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ClientSignup",
    name: "ClientSignup",
    component: ClientSignup,
  },
  {
    path: "/ClientHub",
    name: "ClientHub",
    component: ClientHubPage,
    beforeEnter: userAuth,
  },
  {
    path: "/TradieList",
    name: "TradieList",
    component: TradieList,
  },

  {
    path: "/TradieAccountPage",
    name: "TradieAccountPage",
    component: TradieAccountPage,
  },
  {
    path: "/TradieAccountEdit",
    name: "TradieAccountEdit",
    component: TradieAccountEdit,
  },
  {
    path: "/TradieSignup",
    name: "TradieSignup",
    component: TradieSignup,
  },

  // add more routes here
];
// code below is NOT to be edited
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
