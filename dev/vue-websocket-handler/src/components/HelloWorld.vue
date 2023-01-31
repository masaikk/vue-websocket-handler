<script setup lang="ts">
import { ref } from "vue";
import { useWebsocket } from "../../../../dist";

const obj = useWebsocket();

obj.logVersion();

defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped></style>
