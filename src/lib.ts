import type {
  WebSocketConfig,
  HandlerEmitter,
  WebSocketHandlerType,
} from "./types";
import { checkWindowWebSocket, fixUrl } from "./utils";

const useWebSocketPlugin = {
  install(app: any) {
    app.config.globalProperties.$ws = this;
  },
};

const useWebSocket = (config?: WebSocketConfig): WebSocketHandlerType => {
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

  /**
   * init WebSocket Event Handlers
   */
  let initWebSocketEventHandlers = () => {
    thisWebSocket.onopen = () => {
      console.log(`successful setup WebSocket at ${protocol}`);
    };
    thisWebSocket.onerror = () => {
      console.error(`error`);
    };
  };

  const emitters: HandlerEmitter[] = [];
  if (config?.emitters as HandlerEmitter) {
    emitters.push(config?.emitters as HandlerEmitter);
  } else {
    if (typeof config?.emitters !== "undefined") {
      (config?.emitters as HandlerEmitter[]).map((emitter) => {
        emitters.push(emitter);
      });
    }
  }
  const timeout: number =
    typeof config?.timeout === "undefined" ? 5000 : config?.timeout;

  initWebSocketEventHandlers();

  return {
    // client
    client: thisWebSocket,

    // log version in console
    logVersion: () => {
      console.log("Version 0.0.0");
    },
    emitters,
  };
};

export { useWebSocket, useWebSocketPlugin };
export type { WebSocketConfig };
