import "./assets/main.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";


import PrimeVue from "primevue/config";
import DialogService from "primevue/dialogservice";

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.mount("#app");
app.use(DialogService);
