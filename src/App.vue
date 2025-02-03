<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>

<template>
  <BButton variant="primary" @click="show = !show">Click me</BButton>
  <BModal v-model="show">Test</BModal>
</template>
