<template>
  <div class="course-page">
    <h1 class="course-page__title">{{ course.name }}</h1>
    <GraphVisualizer :course="course" :eventHandlers="eventHandlers" />
  </div>
</template>

<script setup lang="ts">
import * as vNG from 'v-network-graph';
import { useRoute } from 'vue-router';
import router from '../router';
import GraphVisualizer from '../components/GraphVisualizer.vue';
import useIsStudent from '../composables/useIsStudent';

const { courseId } = useRoute().params;

const { isStudent, course, node, setNode, setModule } = useIsStudent();

const eventHandlers: vNG.EventHandlers = {
  'node:click': ({ node: nodeID }) => {
    console.log();

    setNode(nodeID);
    setModule(node.value.modules[0].id);

    router.push({
      name: isStudent ? 'StudentCourseModule' : 'CourseModule',
      params: { courseId: courseId, nodeId: nodeID },
    });
    console.log(courseId, nodeID);
  },
};

console.log('PREVIEW COURSE', course.value, isStudent);
</script>

<style scoped lang="scss">
.course-page {
  height: 100%;
  padding: 20px 0;

  &__title {
    text-align: center;
  }
}
</style>
