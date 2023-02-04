<script setup lang="ts">
import { webSocketHandler } from "../config/webSocket";

webSocketHandler.logVersion();

defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped></style>
