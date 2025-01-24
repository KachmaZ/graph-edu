<template>
  <div class="module-navigation">
    <div class="module-navigation__title">
      <h4>{{ nodeTitle }}</h4>
    </div>
    <div class="module-navigation__items">
      <div
        v-if="nodeIndex !== 0"
        :class="['module-navigation__items--item', prevNextMode === 'prev' ? 'active' : '']"
        @click="prevNextClickHandler('prev')"
      >
        P
      </div>
      <div
        v-for="(nodeModule, index) in nodeModules"
        class="module-navigation__items--item"
        :class="module?.id === nodeModule.id && prevNextMode === null ? 'active' : ''"
        :key="nodeModule.id"
        @click="moduleClickHandler(nodeModule.id)"
      >
        {{ index + 1 }}
      </div>

      <div
        :class="['module-navigation__items--item', prevNextMode === 'next' ? 'active' : '']"
        @click="prevNextClickHandler('next')"
      >
        N
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EduNodeModule } from '../../types';
import useIsStudent from '../../composables/useIsStudent';
import ModulePrevNextNode from './ModulePrevNextNode.vue';
import ModuleContent from './ModuleContent.vue';
import { computed, watch } from 'vue';

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

  display: flex;
  align-items: center;

  gap: 20px;

  &__items {
    display: flex;
    align-items: center;
    gap: 4px;

    &--item {
      width: 30px;
      height: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid white;
      border-radius: 4px;

      cursor: pointer;
      &.active {
        background: white;
        color: #000;
      }
    }
  }
}
</style>
