import type {
  WebSocketConfig,
  HandlerEmitter,
  WebSocketHandlerType,
} from "./types";
import { checkWindowWebSocket, fixUrl, logVersion } from "./utils";
import { CONNECT_TIMEOUT } from "./config";

const useWebSocketPlugin = {
  install(app: any) {
    app.config.globalProperties.$ws = useWebSocket();
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

  const timeout: number =
    typeof config?.timeout === undefined ? CONNECT_TIMEOUT : config?.timeout;

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
    thisWebSocket.onclose = () => {
      console.log("close websocket");
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
    protocol,
    logVersion: logVersion,
    emitters,
  };

  webSocketHandler.reCreateWebSocketInstance = () => {
    try {
      thisWebSocket = new WebSocket(webSocketHandler.protocol);
      webSocketHandler.addHandlers();
    } catch (e) {
      throw e;
    }
  };

  webSocketHandler.addHandlers = () => {
    webSocketHandler.onopen = initWebSocketEventHandlers;
    webSocketHandler.client.onmessage = (event) => {
      console.log(event);
    };

    webSocketHandler.sendMessage = (
      data: string | ArrayBufferLike | Blob | ArrayBufferView
    ) => {
      webSocketHandler.client?.send(data);
    };

    webSocketHandler.client.onmessage = (event) => {
      webSocketHandler.onmessage(event);
    };
  };

  webSocketHandler.addHandlers();

  return webSocketHandler;
};

export { useWebSocket, useWebSocketPlugin };
export type { WebSocketConfig };
