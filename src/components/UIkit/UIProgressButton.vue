<template>
  <button :class="['ui-progress-button', 'text-main', `status-${status}`]" v-bind="{ ...props }">
    <img v-if="status !== 'available'" :src="getIconSrc" alt="" srcset="" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import courseCheckIconUrl from '@/assets/images/icons/course-check.svg';
import courseProgressIconUrl from '@/assets/images/icons/course-in-progress.svg';
import courseLockedIconUrl from '@/assets/images/icons/locked.svg';
import { computed } from 'vue';

interface UIProgressButtonProps {
  status: 'available' | 'passed' | 'current' | 'closed';
}

const props = defineProps<UIProgressButtonProps>();

const getIconSrc = computed(() => {
  if (props.status === 'closed') {
    return courseLockedIconUrl;
  }
  if (props.status === 'current') {
    return courseProgressIconUrl;
  } else {
    return courseCheckIconUrl;
  }
});
</script>

<style scoped lang="scss">
.ui-progress-button {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  @include color-scheme-base(status);

  .current {
  }
}
</style>
