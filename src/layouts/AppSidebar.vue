<template>
  <aside class="app-sidebar">
    <div class="app-sidebar__modules">
      <h4 class="node__title">{{ node.name }}</h4>
      <UISideTab
        v-for="(nodeModule, index) in node.modules"
        :key="nodeModule.id"
        :item-number="index + 1"
        :title="nodeModule.title"
        :status="nodeModule.status"
        :class="nodeModule.id == module?.id ? 'current' : ''"
        @click="moduleLinkHandler(node.id, nodeModule.id)"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import router from '../router';
import useIsStudent from '../composables/useIsStudent';
import UISideTab from '../components/UIkit/UISideTab.vue';

const { isStudent, course, node, module, setNode, setModule } = useIsStudent();

const moduleLinkHandler = (nodeId: string, moduleId: string) => {
  setNode(nodeId);
  setModule(moduleId);
  router.push({
    name: isStudent ? 'StudentCourseModule' : 'CourseModule',
    params: { courseId: course.value.id, nodeId },
  });
};
</script>

<style scoped lang="scss">
.app-sidebar {
  width: $sidebar-width;
  min-height: 100%;

  padding: 10px;

  position: fixed;
  top: 115px;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 8px;

  background-color: $bg-black;
  border-radius: 0 0 20px 0;

  font-size: 16px;

  &__modules {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .node {
      &__title {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
