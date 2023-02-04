import type { WebSocketConfig } from "../../../../dist";
import { useWebsocket } from "../../../../dist";

const websocketConfig: WebSocketConfig = {
  host: "localhost",
  port: "8899",
};

const webSocketHandler = useWebsocket(websocketConfig);

export { webSocketHandler };
