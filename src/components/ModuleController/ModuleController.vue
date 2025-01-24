<template>
  <div class="module-controller">
    <div class="module-controller__nav">
      <ModuleNavigation
        :node-title="node.name ?? ''"
        :node-modules="node.modules ?? []"
        v-model:chosen-component="contentComponent"
        v-model:prev-next-mode="prevNextMode"
      />
    </div>
    <div class="module-controller__content">
      <component :is="contentComponent" v-bind="{ prevNextMode }">
        <h2>{{ module?.title }}</h2>
        {{ module?.content }}
      </component>
    </div>
    <div class="module-controller__controls">
      <button @click="previousAction" :disabled="isPreviousDisabled">Предыдущий модуль</button>
      <button @click="nextAction" :disabled="isNextDisabled">Следующий модуль</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue';
import router from '../../router';
import ModuleNavigation from './ModuleNavigation.vue';
import useIsStudent from '../../composables/useIsStudent';
import ModuleContent from './ModuleContent.vue';

const { isStudent, course, node, module, setModule } = useIsStudent();

const contentComponent = shallowRef(ModuleContent);
const prevNextMode = ref(null);

const isPreviousDisabled = computed(() => {
  const currentModuleIndex = node.value.modules.findIndex(
    (nodeModule) => nodeModule.id === module.value.id,
  );
  const nodeIndex = Object.entries(course.value.nodes).findIndex(
    ([_, courseNode]) => courseNode.id === node.value.id,
  );
  if (nodeIndex === 0 && currentModuleIndex === 0) {
    return true;
  }
  return false;
});
const isNextDisabled = computed(() => {
  const currentCourseNodes = Object.entries(course.value.nodes);
  const nodeIndex = currentCourseNodes.findIndex(
    ([_, courseNode]) => courseNode.id === node.value.id,
  );
  if (nodeIndex === currentCourseNodes.length - 1) {
    return true;
  }
  return false;
});

const previousAction = () => {
  const moduleIndex = node.value.modules.findIndex(
    (nodeModule) => nodeModule.id === module.value?.id,
  );
  console.log('MI', moduleIndex);

  if (moduleIndex === 0) {
    // Если модуль первый - к предыдущему узлу либо заблокировано
    const nodeIndex = Object.entries(course.value.nodes).findIndex(
      ([_, courseNode]) => courseNode.id === node.value.id,
    );

    const previousNodeID = Object.entries(course.value.nodes)[nodeIndex - 1][1].id;

    router.push({
      name: isStudent ? 'StudentCourseModule' : 'CourseModule',
      params: {
        courseId: course.value.id,
        nodeId: previousNodeID,
      },
    });
  } else {
    setModule(node.value.modules[moduleIndex - 1].id);
  }
};

const nextAction = () => {
  const moduleIndex = node.value.modules.findIndex(
    (nodeModule) => nodeModule.id === module.value?.id,
  );

  if (moduleIndex === node.value.modules.length - 1) {
    // Если модуль последний - к следующему узлу
    const nodeIndex = Object.entries(course.value.nodes).findIndex(
      ([_, courseNode]) => courseNode.id === node.value.id,
    );

    const nextNodeID = Object.entries(course.value.nodes)[nodeIndex + 1][1].id;

    router.push({
      name: isStudent ? 'StudentCourseModule' : 'CourseModule',
      params: {
        courseId: course.value.id,
        nodeId: nextNodeID,
      },
    });
  } else {
    setModule(node.value.modules[moduleIndex + 1].id);
  }
};
</script>

<style scoped lang="scss">
.module-controller {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 20px;
  overflow: hidden;
  &__nav,
  &__controls {
    height: 60px;
    width: 100%;
    background-color: #718b8d;
  }

  &__content {
    height: 100%;
    padding: 20px;
  }

  &__controls {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
