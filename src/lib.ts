import type {
  WebSocketConfig,
  HandlerEmitter,
  WebSocketHandlerType,
  HandlerEmitterType,
  HandlerEmitterIntra,
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
  const fullUrl: string = `ws://${configHost}:${port}${formattedUrl}`;
  let thisWebSocket: WebSocket = new WebSocket(fullUrl);

  const timeout: number =
    typeof config?.timeout === undefined ? CONNECT_TIMEOUT : config?.timeout;

  /**
   * init WebSocket Event Handlers
   */
  let initWebSocketEventHandlers = () => {
    thisWebSocket.onopen = () => {
      console.log(`successful create WebSocket at ${fullUrl}`);
    };
    thisWebSocket.onerror = () => {
      console.error(`error`);
    };
    thisWebSocket.onclose = () => {
      console.log("close websocket");
    };
  };

  initWebSocketEventHandlers();

  const emitters: HandlerEmitterType[] = new Array<HandlerEmitterType>();
  if (config?.emitters as HandlerEmitterType) {
    emitters.push(config?.emitters as HandlerEmitterType);
  } else {
    if (typeof config?.emitters !== "undefined") {
      (config?.emitters as HandlerEmitterType[]).map((emitter) => {
        emitters.push(emitter);
      });
    }
  }

  let webSocketHandler: WebSocketHandlerType = {
    client: thisWebSocket,
    protocol: fullUrl,
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
      try {
        (webSocketHandler.emitters as HandlerEmitterType[]).forEach(
          (emitter: HandlerEmitterType) => {
            if (emitter as HandlerEmitterIntra) {
            }
          }
        );
      } catch (e) {
        console.log(e);
      }
      webSocketHandler.onmessage(event);
    };
  };

  webSocketHandler.addHandlers();

  return webSocketHandler;
};

export { useWebSocket, useWebSocketPlugin };
export type { WebSocketConfig };
