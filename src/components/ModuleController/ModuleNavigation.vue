<template>
  <div class="module-navigation">
    <div class="module-navigation__title">
      <h3>{{ nodeTitle }}</h3>
    </div>
    <div class="module-navigation__items">
      <UIProgressButton
        v-if="nodeIndex !== 0"
        @click="prevNextClickHandler('prev')"
        status="available"
        >P</UIProgressButton
      >
      <UIProgressButton
        v-for="(nodeModule, index) in nodeModules"
        :class="module?.id === nodeModule.id && 'status-current'"
        :status="nodeModule.status"
        :disabled="nodeModule.status === 'closed'"
        :key="index"
        @click="moduleClickHandler(nodeModule.id)"
      />
      <UIProgressButton @click="prevNextClickHandler('next')" status="available"
        >N</UIProgressButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EduNodeModule } from '../../types';
import useIsStudent from '../../composables/useIsStudent';
import ModulePrevNextNode from './ModulePrevNextNode.vue';
import ModuleContent from './ModuleContent.vue';
import { computed, watch } from 'vue';
import UIProgressButton from '../UIkit/UIProgressButton.vue';

const chosenComponent = defineModel('chosenComponent');
const prevNextMode = defineModel('prevNextMode');

defineProps<{
  nodeTitle: string;
  nodeModules: EduNodeModule[];
}>();

const { course, node, module, setModule } = useIsStudent();

const nodeIndex = computed(() => {
  return Object.values(course.value.nodes).findIndex(
    (courseNode) => courseNode.id === node.value.id,
  );
});

const moduleClickHandler = (moduleID: string) => {
  chosenComponent.value = ModuleContent;
  prevNextMode.value = null;
  setModule(moduleID);
};

const prevNextClickHandler = (mode: 'prev' | 'next') => {
  chosenComponent.value = ModulePrevNextNode;
  prevNextMode.value = mode;
};

watch(module, () => {
  prevNextMode.value = null;
  chosenComponent.value = ModuleContent;
});
</script>

<style scoped lang="scss">
.module-navigation {
  height: 100%;

  padding: 0 20px;

  gap: 20px;

  &__title {
    margin-bottom: 20px;
  }

  &__items {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}
</style>
