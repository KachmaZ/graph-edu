<template>
  <button :class="['ui-button', 'text-main']" v-bind="{ ...props }">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface UIButtonProps {
  variant: 'primary' | 'secondary';
}

const props = defineProps<UIButtonProps>();
</script>

<style scoped lang="scss">
.ui-button {
  min-width: 155px;
  height: 56px;
  border-radius: 15px;
  border: none;

  &[variant='primary'] {
    @include color-scheme-base(primary);
  }
  &[variant='secondary'] {
    @include color-scheme-base(secondary);
  }
  &[variant='dark'] {
    @include color-scheme-base(dark);
  }
}
</style>
