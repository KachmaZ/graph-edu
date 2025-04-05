<template>
  <RouterLink
    class="ui-nav-tab text-main"
    v-if="route.isAvailable"
    :to="route.to"
    exactActiveClass="ui-nav-tab__exact-active"
  >
    {{ route.title }}
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink, type RouteLocationRaw } from 'vue-router';

defineProps<{
  route: {
    title: string;
    to: RouteLocationRaw;
    isAvailable?: boolean;
  };
}>();
</script>

<style scoped lang="scss">
.ui-nav-tab {
  text-decoration: none;
  &:hover {
    color: $secondary-hover;
  }

  &:active {
    color: $text-pressing;
  }

  &__exact-active {
    text-decoration: none !important;
    color: $text-unavailable !important;
  }
}
</style>
