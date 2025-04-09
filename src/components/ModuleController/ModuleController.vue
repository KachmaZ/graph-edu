<template>
  <div class="module-controller">
    <div class="module-controller__nav">
      <ModuleNavigation
        :node-title="node.name ?? ''"
        :node-modules="node.modules ?? []"
        v-model="moduleContentConfig"
        v-model:currentPosition="currentPosition"
      />
    </div>
    <div class="module-controller__content">
      <component
        v-bind="moduleContentConfig.componentProps"
        :is="moduleContentConfig.componentIs"
        :key="currentPosition"
      >
      </component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import ModuleNavigation from './ModuleNavigation.vue';
import useIsStudent from '../../composables/useIsStudent';
import ModuleContent from './ModuleContent.vue';

const { node, module } = useIsStudent();

const currentPosition = ref(1);

const moduleContentConfig = shallowRef({
  componentIs: ModuleContent,
  componentProps: { htmlContent: module.value?.content ?? '' },
});
</script>

<style scoped lang="scss">
.module-controller {
  height: 100%;
  padding: 35px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 25px;
  background-color: $bg-transparency;
  overflow: hidden;

  &__nav,
  &__controls {
    height: 100px;
    width: 100%;
  }

  &__content {
    height: 100%;
    padding: 20px;
  }

  &__controls {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
