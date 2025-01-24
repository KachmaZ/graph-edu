<template>
  <AppHeader />
  <AppSidebar />
  <main class="app--head-sidebar-layout">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader.vue';
import AppSidebar from './AppSidebar.vue';
</script>

<style scoped>
.app--head-sidebar-layout {
  width: calc(100% - 220px);
  height: 90vh;

  margin: 80px 20px 20px 220px;
  padding: 0;

  border: 1px solid #718b8d;
  border-radius: 20px;
}
</style>
