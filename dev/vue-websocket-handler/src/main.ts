import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { useWebSocketPlugin } from "../../../dist";

const app = createApp(App);
app.use(useWebSocketPlugin);
app.mount("#app");
