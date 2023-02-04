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

export type { WebSocketConfig, HandlerEmitter };
