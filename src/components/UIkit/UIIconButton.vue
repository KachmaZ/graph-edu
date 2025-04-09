<template>
  <button class="ui-icon-button">
    <icon />
  </button>
</template>

<script setup lang="ts">
import type { FunctionalComponent } from 'vue';

const props = defineProps<{
  icon: FunctionalComponent;
}>();
</script>

<style scoped lang="scss">
.ui-icon-button {
  width: 40px;
  height: 40px;

  border: none;
  border-radius: 5px;

  cursor: pointer;

  @include color-scheme-base('dark');
}
</style>
