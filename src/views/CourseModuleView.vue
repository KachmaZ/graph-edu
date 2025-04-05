<template>
  <ModuleController :modules="node.modules" />
</template>

<script setup lang="ts">
import ModuleController from '../components/ModuleController/ModuleController.vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import useIsStudent from '../composables/useIsStudent';

const route = useRoute();
const { node, setCourse, setNode } = useIsStudent();

watch(
  () => route.params.courseId,
  (newID) => {
    setCourse(newID.toString());
  },
);
watch(
  () => route.params.nodeId,
  (newID) => {
    setNode(newID.toString());
  },
);
</script>

<style scoped></style>
