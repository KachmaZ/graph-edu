<template>
  <nav class="app-nav">
    <template v-for="route in routes" :key="route.title">
      <RouterLink v-if="route.isAvailable" :to="route.route">
        <div>
          {{ route.title }}
        </div>
      </RouterLink>
    </template>
  </nav>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

defineProps<{
  routes: { title: string; route: RouteLocationRaw; isAvailable?: boolean }[];
}>();
</script>

<style scoped lang="scss">
.app-nav {
  display: flex;
  gap: 20px;

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
