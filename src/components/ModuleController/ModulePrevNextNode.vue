<template>
  <div class="prevNext">
    <h2 class="prevNext__title">
      {{ title }}
    </h2>
  </div>
  <div class="prevNext__links">
    <UIButton
      variant="primary"
      class="prevNext__links--item"
      v-for="actualNode in actualNodes"
      :key="actualNode?.id"
      @click="setNode(actualNode?.id ?? '')"
    >
      {{ actualNode?.name }}
    </UIButton>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useIsStudent from '../../composables/useIsStudent';
import UIButton from '@/components/UIkit/UIButton.vue';

const props = defineProps<{ prevNextMode: 'prev' | 'next' | null }>();

const { course, node, getNodeByID, setNode } = useIsStudent();

const title = computed(() => {
  if (props.prevNextMode === 'prev') {
    return 'Предыдущие темы';
  }
  if (props.prevNextMode === 'next') {
    return 'Следующие темы';
  }
  return '';
});

const getPreviusNodes = () => {
  return Object.values(course.value.edges)
    .filter((edge) => edge.target === node.value.id)
    .map((edge) => getNodeByID(edge.source));
};

const getNextNodes = () => {
  return Object.values(course.value.edges)
    .filter((edge) => edge.source === node.value.id)
    .map((edge) => getNodeByID(edge.target));
};

const actualNodes = computed(() => {
  if (props.prevNextMode === 'next') {
    return getNextNodes();
  }
  if (props.prevNextMode === 'prev') {
    return getPreviusNodes();
  }
  return [];
});
</script>

<style scoped lang="scss">
.prevNext {
  &__title {
    text-align: center;
  }
  &__links {
    padding: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;

    &--item {
      padding: 10px;

      &:first-child,
      &:last-child {
        margin: 0 10px;
      }
    }
  }
}
</style>
