<template>
  <div :class="['ui-side-tab', status === 'closed' && 'closed']">
    <div class="ui-side-tab__text text-main">{{ itemNumber }}. {{ title }}</div>
    <div class="ui-side-tab__icon">
      <img v-if="status === 'passed'" :src="passedIconSrc" />
      <img v-if="status === 'closed'" :src="lockedIconSrc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import passedIconSrc from '@/assets/images/icons/passed.svg?url';
import lockedIconSrc from '@/assets/images/icons/locked.svg?url';

defineProps<{
  itemNumber: number;
  title: string;
  status: 'closed' | 'passed' | 'available' | 'current';
}>();
</script>

<style scoped lang="scss">
.ui-side-tab {
  height: 56px;
  width: 415px;
  padding: 15px 25px;

  display: flex;
  justify-content: space-between;

  border-radius: 15px;

  background-color: $bg-transparency;

  cursor: pointer;

  &:hover {
    background-color: $bg-transparency-hover;
  }

  &:active,
  &.current {
    background-color: $bg-transparency-active;
  }

  &.closed {
    pointer-events: none;
  }

  &__text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__icon {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
