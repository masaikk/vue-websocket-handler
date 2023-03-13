import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { useWebSocketPlugin } from "../../../dist";
import { webSocketConfig } from "./config/webSocket";

const app = createApp(App);
app.use(useWebSocketPlugin, webSocketConfig);
app.mount("#app");
