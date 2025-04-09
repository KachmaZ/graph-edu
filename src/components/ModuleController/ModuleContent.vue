<template>
  <div class="module-content">
    <!-- {{ htmlContent }} -->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps<{
  htmlContent: string;
}>();

onMounted(() => {
  const contentWindow = document.querySelector('.module-content');
  if (contentWindow) {
    contentWindow.innerHTML = props.htmlContent;
  }
});
</script>

<style scoped lang="scss">
.module-content {
  height: 100%;

  overflow-y: scroll;
}
</style>
