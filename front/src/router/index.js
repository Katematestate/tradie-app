// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
// App.vue will be redirected to linked components via <router-links>
// as a convention we will create new folder in 'src' named 'views' and place components to be linked in there
// components related to those links needs to be defined below both for import and routes[] array
import LandingPage from "../views/LandingPage.vue";
import ClientSignup from "../views/ClientSignup.vue";
import TradieList from "../views/TradieListPage.vue";
import TradieAccountEdit from "../views/TradieAccountEdit.vue";
import TradieAccountPage from "../views/TradieAccountPage.vue";
import TradieSignup from "../views/TradieSignup.vue";
import Footer from "../components/Footer.vue";
import ClientHubPage from "../views/ClientHubPage.vue";

import userAuth from "./middlewares/userAuth";
import businessAuth from "./middlewares/businessAuth";
import userOrNoneAuth from "./middlewares/userOrNoneAuth";

const routes = [
  // Public Routes ------------------------------------------------------------
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/client/signup",
    name: "ClientSignup",
    component: ClientSignup,
  },

  {
    path: "/tradie/signup",
    name: "TradieSignup",
    component: TradieSignup,
  },
  {
    path: "/tradie/Footer",
    name: "Footer",
    component: Footer,
  },

  // Private Routes -----------------------------------------------------------
  {
    path: "/client/hub",
    name: "ClientHub",
    component: ClientHubPage,
    beforeEnter: userAuth,
  },
  {
    path: "/tradie/list",
    name: "TradieList",
    component: TradieList,
    beforeEnter: userOrNoneAuth,
  },

  {
    path: "/tradie/account",
    name: "TradieAccountPage",
    component: TradieAccountPage,
    beforeEnter: businessAuth,
  },
  {
    path: "/tradie/account/edit",
    name: "TradieAccountEdit",
    component: TradieAccountEdit,
    beforeEnter: businessAuth,
  },

  // add more routes here
];
// code below is NOT to be edited
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
