<template>
  <div>
    <CourseCardGrid :key="$route.path" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import CourseCardGrid from '../components/CourseCardGrid.vue';
import CoursesService from '@/api/servers/CoursesService';

onMounted(async () => {
  console.log(await CoursesService.getCourses());
});
</script>

<style scoped></style>
