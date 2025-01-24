<template>
  <div class="course-card-grid">
    <CourseCard v-for="course in courseList" :key="course.id" :course="course" />
  </div>
</template>

<script setup lang="ts">
import CourseCard from './CourseCard.vue';
import useIsStudent from '../composables/useIsStudent';

const { courseList } = useIsStudent();
</script>

<style scoped lang="scss">
.course-card-grid {
  display: flex;
  gap: 20px;
  padding: 24px 0;
}
</style>
