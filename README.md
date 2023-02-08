# vueWebsocketHandler

### Description
**vueWebsocketHandler** is a library used to handle WebSocket in Vue3.



### usage

#### install this package

```shell
npm i vue-websocket-handler -S
```

you can use it in a single vue component. In a config file, you can initialize this handler.
```typescript
import type { WebSocketConfig } from "vue-websocket-handler";
import { useWebSocket } from "vue-websocket-handler";

const webSocketConfig: WebSocketConfig = {
  host: "localhost",
  port: "8899",
  url: "/ws",
  emitters: [
    () => {
      console.log("send msg");
    },
  ],
};

const webSocketHandler = useWebSocket(webSocketConfig);

export { webSocketHandler };



```

in a vue file, you could use `sendMessage`

```typescript
import { webSocketHandler } from "../config/webSocket";
import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    webSocketHandler.sendMessage!("hello")
  }, 3000);
  webSocketHandler.onmessage=(msg:any)=>{
    console.log(msg.data);
  }
});
```

