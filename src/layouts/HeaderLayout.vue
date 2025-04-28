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

  @include respond-to(sm) {
    width: 100%;
    padding: 56px 20px $footer_height; // first part - mob header height
  }

  main {
    height: 100%;
  }
}
</style>
