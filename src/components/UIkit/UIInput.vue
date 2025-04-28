<template>
  <input class="ui-input text-main" v-model="modelValue" v-bind="{ ...props }" />
</template>

<script setup lang="ts">
interface UIInputProps {
  title: string;
}

const props = defineProps<UIInputProps>();
const modelValue = defineModel();
</script>

<style scoped lang="scss">
.ui-input {
  width: 500px;
  height: 54px;

  padding: 30px;
  border: none;
  outline: none;
  border-radius: 15px;
  @include color-scheme-base(dark);
}
</style>
