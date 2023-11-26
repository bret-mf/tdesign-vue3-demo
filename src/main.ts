import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";

// import "tdesign-vue-next/dist/reset.css";
import "tdesign-vue-next/es/style/index.css";
import "@/assets/style/theme.css";

const app = createApp(App);

app.mount("#app");
