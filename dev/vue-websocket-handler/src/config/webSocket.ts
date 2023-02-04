import type { WebSocketConfig } from "../../../../dist";
import { useWebsocket } from "../../../../dist";

const websocketConfig: WebSocketConfig = {
  host: "localhost",
  port: "8899",
  url: "/ws",
};

const webSocketHandler = useWebsocket(websocketConfig);

export { webSocketHandler };
