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
  client?: WebSocket | null;

  // version information
  logVersion: () => void;

  //
  emitters?: HandlerEmitter | HandlerEmitter[];

  // createWebSocketInstance
  createWebSocketInstance?: () => void;

  onclose?: () => void;
  onerror?: () => void;
  onopen?: () => void;
  onmessage?: ((this: WebSocket, ev: MessageEvent<any>) => any) | null;
  onreconnect?: () => void;
  sendMessage?: (message: string) => void;
}

export type { WebSocketConfig, HandlerEmitter, WebSocketHandlerType };
