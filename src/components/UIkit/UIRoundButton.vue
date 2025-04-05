<template>
  <button :class="['ui-round-button', 'text-main']" v-bind="{ ...props }"><slot /></button>
</template>

<script setup lang="ts">
interface UIRoundButtonProps {}

const props = defineProps<UIRoundButtonProps>();
</script>

<style scoped lang="scss">
.ui-round-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  @include color-scheme-base(secondary);
}
</style>
