# vueWebsocketHandler

### Description
**vueWebsocketHandler** is a library used to handle WebSocket by hooks and plugin in Vue3.



### usage

#### install this package

```shell
npm install vue-websocket-handler --save
```

you can use it in a single vue component. In a config file, you can initialize this handler and export it.
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

in a vue file, you can import this handler and override `sendMessage` in `setup()` function like this:

```typescript
import { webSocketHandler } from "../config/webSocket";
import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    webSocketHandler.sendMessage!("hello")
  }, 3000);
  webSocketHandler.onmessage = (event?: MessageEvent) => {
    console.log(event);
    console.log(event?.data)
  };
});
```

### backend sample 
websocket server sample in fastapi.
```python
from fastapi import FastAPI
from fastapi.websockets import WebSocket

app = FastAPI()


@app.websocket_route("/ws")
async def websocket(websocket: WebSocket) -> None:
    await websocket.accept()

    r = 'hello'
    while True:
        msg = r
        data = await websocket.receive_text()
        print(data)
        await websocket.send_json({"msg": msg, "data": data})


if __name__ == '__main__':
    import uvicorn

    uvicorn.run(
        app='main:app',
        host="127.0.0.1",
        port=8899,
    )

```

