<template>
  <div :class="['course-card-grid', userMode && 'course-card-grid__user']">
    <template v-if="userMode">
      <MyCourseCard v-for="course in courseList" :key="course.id" :course="course" />
    </template>
    <template v-else>
      <CourseCard v-for="course in courseList" :key="course.id" :course="course" />
    </template>
  </div>
</template>

<script setup lang="ts">
import CourseCard from './CourseCard.vue';
import useIsStudent from '../composables/useIsStudent';
import MyCourseCard from './MyCourseCard.vue';

defineProps<{
  userMode?: boolean;
}>();

const { courseList } = useIsStudent();
</script>

<style scoped lang="scss">
.course-card-grid {
  padding: 24px 0;

  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  &__user {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
