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

  // version information
  logVersion: () => void;

  //
  emitters?: HandlerEmitter | HandlerEmitter[];

  // createWebSocketInstance
  createWebSocketInstance?: () => void;

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
