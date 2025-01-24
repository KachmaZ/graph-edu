<template>
  <ModuleController :modules="node.modules" />
</template>

<script setup lang="ts">
// import { storeToRefs } from 'pinia';
// import { useCourseStore } from '../store/courseStore';
import ModuleController from '../components/ModuleController/ModuleController.vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import useIsStudent from '../composables/useIsStudent';

const route = useRoute();
const { node, setCourse, setNode, setModule } = useIsStudent();

watch(
  () => route.params.courseId,
  (newID) => {
    setCourse(newID.toString());
    console.log('CC from view', node.value.id);
  },
);
watch(
  () => route.params.nodeId,
  (newID) => {
    setNode(newID.toString());
    console.log('CN from view', node.value.id);
  },
);
</script>

<style scoped></style>
