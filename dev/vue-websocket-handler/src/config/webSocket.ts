import type { WebSocketConfig } from "../../../../dist";
import { useWebSocket } from "../../../../dist";

const webSocketConfig: WebSocketConfig = {
  host: "localhost",
  port: "8899",
  url: "/ws",
};

const webSocketHandler = useWebSocket(webSocketConfig);

export { webSocketHandler };
