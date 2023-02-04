// emitter types
type HandlerEmitter = (arg?: any) => {};

interface WebSocketConfig {
  // host
  host?: string;

  // port
  port?: string | number;

  // emitters used by websocket client
  emitters?: HandlerEmitter | HandlerEmitter[];
}

export type { WebSocketConfig, HandlerEmitter };
