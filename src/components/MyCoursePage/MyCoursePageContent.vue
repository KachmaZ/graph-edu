<template>
  <div class="course-content">
    <div class="course-content__graph">
      <GraphVisualizer :course="course" :eventHandlers="eventHandlers" />
    </div>
    <div class="course-content__description">dawdwadad</div>
  </div>
</template>

<script setup lang="ts">
import * as vNG from 'v-network-graph';
import useIsStudent from '@/composables/useIsStudent';
import router from '@/router';
import { useRoute } from 'vue-router';
import GraphVisualizer from '../GraphVisualizer.vue';

const { isStudent, course, node, setNode, setModule } = useIsStudent();
const { courseId } = useRoute().params;

const eventHandlers: vNG.EventHandlers = {
  'node:click': ({ node: nodeID }) => {
    setNode(nodeID);
    setModule(node.value.modules[0].id);

    router.push({
      name: isStudent ? 'StudentCourseModule' : 'CourseModule',
      params: { courseId: courseId, nodeId: nodeID },
    });
  },
};
</script>

<style scoped lang="scss">
.course-content {
  height: 70vh;
  position: relative;

  background-color: $bg-transparency;
  border-radius: 25px;

  &__graph {
    width: 60%;
    height: 100%;
  }

  &__description {
    width: 490px;
    height: 360px;

    padding: 25px;

    position: absolute;
    top: 100px;
    right: 100px;

    background-color: $bg-transparency;
    border-radius: 25px;
  }
}
</style>
