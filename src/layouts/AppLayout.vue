<template>
  <div class="app-layout">
    <component :is="layout">
      <slot></slot>
    </component>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';
import BaseLayout from './BaseLayout.vue';

const route = useRoute();
const layout = shallowRef(BaseLayout);

watch(
  () => route.meta,
  async (meta) => {
    try {
      if (meta.layout) {
        const component = meta.layout;
        // @ts-ignore
        layout.value = component || BaseLayout;
      } else {
        layout.value = BaseLayout;
      }
    } catch (e) {
      console.error('Динамический шаблон не найден. Установлен шаблон по-умолчанию.', e);
      layout.value = BaseLayout;
    }
  },
);
</script>

<style lang="scss">
.app-layout {
  position: relative;
  background-color: $bg-black;
}
</style>
