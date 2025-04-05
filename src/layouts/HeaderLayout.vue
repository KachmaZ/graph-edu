<template>
  <AppHeader />
  <div class="layout-wrapper">
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader.vue';
</script>

<style scoped lang="scss">
.layout-wrapper {
  width: $app-width;
  min-height: $main_min_height;
  padding: $header_height 60px $footer_height;
  margin: 0 auto;

  main {
    height: 100%;
  }
}
</style>
