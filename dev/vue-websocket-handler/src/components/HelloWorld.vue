<script setup lang="ts">
import { useWebsocket } from "../../../../dist";

console.log(useWebsocket);

defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped></style>
