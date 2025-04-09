<template>
  <div class="module-navigation">
    <div class="module-navigation__title">
      <h3>{{ nodeTitle }}</h3>
    </div>
    <div class="module-navigation__wrapper">
      <div class="module-navigation__items">
        <UIProgressButton
          @click="previousNodesClickHandler"
          status="available"
          :class="currentPosition === 0 ? 'active' : ''"
          >P</UIProgressButton
        >
        <UIProgressButton
          v-for="(nodeModule, index) in nodeModules"
          :class="module?.id === nodeModule.id && 'status-current'"
          :status="nodeModule.status"
          :disabled="nodeModule.status === 'closed'"
          :key="index"
          @click="moduleClickHandler(nodeModule.id, index + 1)"
        />
        <UIProgressButton @click="nextNodesClickHandler" status="available">N</UIProgressButton>
      </div>

      <div class="module-navigation__next-prev-module">
        <UIIconButton
          :icon="ArrowLeftIcon"
          :disabled="isPreviousDisabled"
          @click="previousAction"
        />
        <UIIconButton :icon="ArrowRighIcon" :disabled="isNextDisabled" @click="nextAction" />
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
import UIProgressButton from '../UIkit/UIProgressButton.vue';
import UIIconButton from '@/components/UIkit/UIIconButton.vue';

import ArrowLeftIcon from '@/assets/images/icons/arrow-left.svg?component';
import ArrowRighIcon from '@/assets/images/icons/arrow-right.svg?component';

defineProps<{
  nodeTitle: string;
  nodeModules: EduNodeModule[];
}>();

const currentPosition = defineModel<number>('currentPosition', { required: true });

const modelValue = defineModel<{
  componentIs: any;
  componentProps: any;
  moduleId?: string;
}>({ required: true });

const { node, module, setModule } = useIsStudent();

const navLinks: {
  componentIs: any;
  componentProps: any;
  moduleId?: string;
}[] = [
  {
    componentIs: ModulePrevNextNode,
    componentProps: { prevNextMode: 'prev' },
  },
  ...Object.values(node.value.modules).map((module) => ({
    componentIs: ModuleContent,
    componentProps: { htmlContent: module.content },
    moduleId: module.id,
  })),
  {
    componentIs: ModulePrevNextNode,
    componentProps: { prevNextMode: 'next' },
  },
];

const previousNodesClickHandler = () => {
  currentPosition.value = 0;
};

const nextNodesClickHandler = () => (currentPosition.value = navLinks.length - 1);

const moduleClickHandler = (moduleID: string, newPosition: number) => {
  setModule(moduleID);
  currentPosition.value = newPosition;
};

const previousAction = () => {
  if (currentPosition.value > 1) {
    setModule(navLinks[currentPosition.value - 1].moduleId ?? '');
  } else {
    currentPosition.value--;
  }
};

const nextAction = () => {
  if (currentPosition.value < navLinks.length - 2) {
    setModule(navLinks[currentPosition.value + 1].moduleId ?? '');
  } else {
    currentPosition.value++;
  }
};

const isPreviousDisabled = computed(() => {
  return currentPosition.value === 0;
});
const isNextDisabled = computed(() => {
  return currentPosition.value === navLinks.length - 1;
});

watch(
  module,
  () => {
    currentPosition.value =
      node.value.modules.findIndex((nodeModule) => nodeModule.id === module.value?.id) + 1;
  },
  { immediate: true },
);

watch(
  currentPosition,
  () => {
    modelValue.value = navLinks[currentPosition.value];
  },
  { immediate: true },
);
</script>

<style scoped lang="scss">
.module-navigation {
  height: 100%;

  padding: 0 20px;

  gap: 20px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    margin-bottom: 20px;
  }

  &__items {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__next-prev-module {
    display: flex;
    gap: 5px;
  }
}
</style>
