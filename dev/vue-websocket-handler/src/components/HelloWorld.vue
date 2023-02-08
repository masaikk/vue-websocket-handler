<script setup lang="ts">
import { webSocketHandler } from "../config/webSocket";
import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    webSocketHandler.sendMessage!("hello")
  }, 3000);
  (webSocketHandler.client as WebSocket).onmessage=(msg:any)=>{
    console.log(msg.data);
  }
});


defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped></style>
