<script setup lang="ts">
import { webSocketHandler } from "../config/webSocket";
import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    webSocketHandler.sendMessage!("hello");
  }, 3000);
  webSocketHandler.onmessage = (event?: MessageEvent) => {
    console.log(event);
    console.log(event?.data)
  };
});


defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped></style>
