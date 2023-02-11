// emitter types
type HandlerEmitter = (arg?: any) => any;

interface WebSocketConfig {
  // host
  host?: string;

  // port
  port?: string | number;

  // url
  url?: string;

  // emitters used by websocket client
  emitters?: HandlerEmitter | HandlerEmitter[];

  timeout?: number;
}

interface WebSocketHandlerType {
  // ws

  client: WebSocket;

  // url
  protocol: string;

  // version information
  logVersion: () => void;

  // handler's user functions
  emitters: HandlerEmitter | HandlerEmitter[];

  // add webSocket Handler
  addHandlers?: () => void;

  // createWebSocketInstance
  reCreateWebSocketInstance?: () => void;

  onclose?: () => void;
  onerror?: () => void;
  onopen?: () => void;
  onmessage?: (event?: MessageEvent) => void;
  onreconnect?: () => void;
  sendMessage?: (
    data: string | ArrayBufferLike | Blob | ArrayBufferView
  ) => void;
}

export type { WebSocketConfig, HandlerEmitter, WebSocketHandlerType };
