<template>
  <nav class="app-nav">
    <template v-for="route in routes" :key="route.title">
      <UINavTab :route="route" />
    </template>
  </nav>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';
import UINavTab from './UIkit/UINavTab.vue';

defineProps<{
  routes: { title: string; to: RouteLocationRaw; isAvailable?: boolean }[];
}>();
</script>

<style scoped lang="scss">
.app-nav {
  display: flex;
  gap: 80px;

  align-items: center;

  a {
    text-decoration: none;
    color: white;

    &.router-link-exact-active {
      text-decoration: underline;
    }
  }
}
</style>
