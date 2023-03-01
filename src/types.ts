/**
 * emitter type function
 */
type HandlerEmitter = (emitFlag: string, arg?: any) => any;

/**
 * emitter type class
 */
type HandlerEmitterIntra = {
  emitFlag: string;
  effect: (arg?: any) => any;
};

/**
 * union of emitter types
 */
type HandlerEmitterType = HandlerEmitter | HandlerEmitterIntra;

/**
 * config type of webSocket
 */
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
  emitters: HandlerEmitterType | HandlerEmitterType[];

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

export type {
  WebSocketConfig,
  HandlerEmitter,
  WebSocketHandlerType,
  HandlerEmitterIntra,
  HandlerEmitterType,
};
