<script setup lang="ts">
// import { webSocketHandler } from "../config/webSocket";
import { inject, onMounted } from "vue";
import { useInjectWebSocket, WsKey } from "../../../../dist";


onMounted(() => {
  let wsh = inject(WsKey);
  console.log(wsh);
});


defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped></style>
