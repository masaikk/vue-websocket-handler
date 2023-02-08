import type { WebSocketConfig } from "vue-websocket-handler";
import { useWebSocket } from "vue-websocket-handler";

const webSocketConfig: WebSocketConfig = {
  host: "localhost",
  port: "8899",
  url: "/ws",
  emitters: [
    () => {
      console.log("send msg");
    },
  ],
};

const webSocketHandler = useWebSocket(webSocketConfig);

export { webSocketHandler };
