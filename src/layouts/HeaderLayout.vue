<template>
  <AppHeader />
  <main class="app--header-layout">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader.vue';
</script>

<style scoped lang="scss">
.app--header-layout {
  height: calc(100vh - 60px);
  margin-top: 60px;
}
</style>
