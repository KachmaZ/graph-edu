<template>
  <aside class="app-sidebar">
    <div class="app-sidebar__nodes">
      <div
        class="app-sidebar__nodes--item"
        v-for="[nodeId, node] of Object.entries(course.nodes)"
        :key="node.id"
      >
        <div class="node" v-if="node.modules.length > 0" :class="node.status">
          <span class="node__title">{{ node.name }}</span>
          <hr />
          <div class="node__modules">
            <span
              v-for="nodeModule in node.modules"
              :key="nodeModule.id"
              :class="nodeModule.id === module?.id ? 'active' : ''"
              @click="moduleLinkHandler(nodeId, nodeModule.id)"
            >
              {{ nodeModule.title }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import router from '../router';
import useIsStudent from '../composables/useIsStudent';

const { isStudent, module, course, setNode, setModule } = useIsStudent();

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
  width: 200px;
  height: 90vh;

  padding: 10px;

  position: fixed;
  top: 60px;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 8px;

  background-color: #718b8d;
  border-radius: 0 0 20px 0;

  font-size: 16px;

  &__nodes {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    overflow-y: scroll;

    &--item {
      .node {
        display: flex;
        flex-direction: column;
        gap: 2px;
        background-color: #2f5759;
        border-radius: 8px;
        overflow: hidden;

        &.passed {
          background-color: #999b28;
        }

        &.closed {
          background-color: #575757;
          pointer-events: none;
        }

        &__modules {
          display: flex;
          flex-direction: column;
        }
        &__title {
          padding: 8px;
        }

        &__modules {
          span {
            padding: 8px;

            cursor: pointer;

            &:hover,
            &.active {
              background-color: #617a7b;
            }
          }
        }
      }
    }
  }
}
</style>
