import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.scss";
import router from "./router";

import PrimeVue from "primevue/config";
import DialogService from "primevue/dialogservice";
import ConfirmationService from "primevue/confirmationservice";
import BadgeDirective from "primevue/badgedirective";

const app = createApp(App);
app.config.globalProperties.$root = app;
app.use(PrimeVue);
app.use(router);
app.use(DialogService);
app.use(ConfirmationService);
app.directive("badge", BadgeDirective);

app.mount("#app"); // Must always be last
