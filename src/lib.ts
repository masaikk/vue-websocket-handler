import type {
  WebSocketConfig,
  HandlerEmitter,
  WebSocketHandlerType,
} from "./types";
import { checkWindowWebSocket, fixUrl, logVersion } from "./utils";

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
  let thisWebSocket: WebSocket | null = null;

  const timeout: number =
    typeof config?.timeout === "undefined" ? 5000 : config?.timeout;

  // init once
  let initWebSocketInstance = () => {
    try {
      thisWebSocket = new WebSocket(protocol);
    } catch (e) {
      throw e;
    }
  };

  initWebSocketInstance();

  /**
   * init WebSocket Event Handlers
   */
  let initWebSocketEventHandlers = () => {
    (thisWebSocket as WebSocket).onopen = () => {
      console.log(`successful setup WebSocket at ${protocol}`);
    };
    (thisWebSocket as WebSocket).onerror = () => {
      console.error(`error`);
    };
  };

  initWebSocketEventHandlers();

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

  let webSocketHandler: WebSocketHandlerType = {
    client: thisWebSocket,
    logVersion: logVersion,
    emitters,
  };

  webSocketHandler.createWebSocketInstance = () => {
    let _this = this;
    try {
      thisWebSocket = new WebSocket(protocol);
    } catch (e) {
      if (false) {
        // @ts-ignore
        this.createWebSocketInstance();
      }
      throw e;
    }
  };
  webSocketHandler.onopen = initWebSocketEventHandlers;
  webSocketHandler.onmessage = (webSocketHandler.client as WebSocket).onmessage;
  webSocketHandler.sendMessage = (
    data: string | ArrayBufferLike | Blob | ArrayBufferView
  ) => {
    webSocketHandler.client?.send(data);
  };

  return webSocketHandler;
};

export { useWebSocket, useWebSocketPlugin };
export type { WebSocketConfig };
