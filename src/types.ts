// emitter types
type HandlerEmitter = (arg?: any) => {};

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

  onclose?: () => {};
  onerror?: () => {};
  onopen?: () => {};
  onmessage?: () => {};
  onreconnect?: () => {};
}

export type { WebSocketConfig, HandlerEmitter, WebSocketHandlerType };
