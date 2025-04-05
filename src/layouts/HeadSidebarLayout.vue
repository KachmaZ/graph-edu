<template>
  <AppHeader />
  <div class="layout-wrapper">
    <AppSidebar />
    <main class="app--head-sidebar-layout">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader.vue';
import AppSidebar from './AppSidebar.vue';
</script>

<style scoped lang="scss">
.layout-wrapper {
  width: $app-width;
  padding: $header_height 60px $footer_height;
  margin: 0 auto;

  position: relative;
}

.app--head-sidebar-layout {
  width: $main_with_sidebar_width;
  height: 80vh;

  position: absolute;
  top: $header_height;
  left: $sidebar_width;

  padding: 0;

  border-radius: 20px;
}
</style>
