import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    VBtn: { variant: "outlined" },
    VTextField: { variant: "solo" },
  },
  theme: {
    defaultTheme: "dark",
  },
});

app.use(router);
app.use(vuetify);

app.mount("#app");
