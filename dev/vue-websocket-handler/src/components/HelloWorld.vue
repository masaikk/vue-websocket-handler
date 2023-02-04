<script setup lang="ts">
import { useWebsocket } from "../../../../dist";


const socketHandler = useWebsocket();
socketHandler.logVersion();

defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped></style>
