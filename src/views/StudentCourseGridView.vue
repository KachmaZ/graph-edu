<template>
  <div>
    <CourseCardGrid :courses="userCourses" mode="user" />
  </div>
</template>

<script setup lang="ts">
import CourseCardGrid from '../components/CourseCardGrid.vue';
import { storeToRefs } from 'pinia';
import { useCourseStore } from '../store/courseStore';

const { userCourses } = storeToRefs(useCourseStore());
</script>

<style scoped></style>
