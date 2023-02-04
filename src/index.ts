import type { WebSocketConfig } from "./types";
import { fixUrl } from "./utils";

const useWebsocket = (config?: WebSocketConfig) => {
  const configHost: string = config?.host as string;
  let port: string = JSON.stringify(config?.port);
  if (port[0] == '"') {
    port = port.slice(1, port.length - 1);
  }
  const formattedUrl: string = fixUrl(config?.url);
  const protocol: string = `ws://${configHost}:${port}${formattedUrl}`;
  let thisWebSocket: WebSocket = new WebSocket(protocol);
  thisWebSocket.onopen = () => {
    console.log(`successful setup WebSocket at ws://${configHost}:${port}`);
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

export { useWebsocket };
export type { WebSocketConfig };
