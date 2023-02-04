import type { WebSocketConfig } from "./types";
import { checkWindowWebSocket, fixUrl } from "./utils";

const useWebSocketPlugin = {
  install(app: any) {
    app.config.globalProperties.$ws = this;
  },
};

const useWebsocket = (config?: WebSocketConfig) => {
  if (!checkWindowWebSocket()) {
    console.error("Your browser doesn't support websocket");
    throw new Error("no support");
  }
  const configHost: string = config?.host as string;
  let port: string = JSON.stringify(config?.port);
  if (port[0] == '"') {
    port = port.slice(1, port.length - 1);
  }
  const formattedUrl: string = fixUrl(config?.url);
  const protocol: string = `ws://${configHost}:${port}${formattedUrl}`;
  let thisWebSocket: WebSocket = new WebSocket(protocol);
  thisWebSocket.onopen = () => {
    console.log(`successful setup WebSocket at ${protocol}`);
  };
  return {
    // client
    client: thisWebSocket,

    // log version in console
    logVersion: () => {
      console.log("Version 0.0.0");
    },
  };
};

export { useWebsocket, useWebSocketPlugin };
export type { WebSocketConfig };
