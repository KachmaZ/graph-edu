<template>
  <div class="course-content">
    <div class="course-content__graph">
      <GraphVisualizer :course="course" :eventHandlers="eventHandlers" />
    </div>
    <div class="course-content__description">
      <div class="node__title">
        <h3>{{ node.name }}</h3>
      </div>
      <div class="node__modules">
        <UISideTab
          v-for="(module, index) in node.modules"
          :key="index"
          :itemNumber="index + 1"
          :title="module.title"
          :status="module.status"
          @click="moduleLinkHandler"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as vNG from 'v-network-graph';
import useIsStudent from '@/composables/useIsStudent';
import router from '@/router';
import GraphVisualizer from '../GraphVisualizer.vue';
import UISideTab from '@/components/UIkit/UISideTab.vue';
import { onMounted } from 'vue';

const { isStudent, course, node, setNode, setModule } = useIsStudent();

const eventHandlers: vNG.EventHandlers = {
  'node:click': ({ node: nodeID }) => {
    setNode(nodeID);
  },
};

const moduleLinkHandler = (nodeId: string, moduleId: string) => {
  setModule(moduleId);
  router.push({
    name: isStudent ? 'StudentCourseModule' : 'CourseModule',
    params: { courseId: course.value.id, nodeId },
  });
};

onMounted(() => {
  setNode(Object.entries(course.value.nodes)[0][0]);
});
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

    .node {
      &__title {
        margin-bottom: 30px;
      }
      &__modules {
        display: flex;
        flex-direction: column;

        gap: 20px;
      }
    }
  }
}
</style>
