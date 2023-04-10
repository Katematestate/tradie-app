import "./assets/main.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import DialogService from "primevue/dialogservice";

import BadgeDirective from "primevue/badgedirective";

const app = createApp(App);
app.config.globalProperties.$root = app;
app.use(PrimeVue);
app.use(router);
app.directive("badge", BadgeDirective);
app.mount("#app");
app.use(DialogService);
