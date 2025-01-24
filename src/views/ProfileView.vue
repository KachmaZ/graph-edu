<template>
  <div>
    {{ user }}
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../store/userStore';

const { user } = useUserStore();
</script>

<style scoped></style>
