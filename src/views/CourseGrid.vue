<template>
  <div>
    <CourseCardGrid :key="$route.path" />
  </div>
</template>

<script setup lang="ts">
import CourseCardGrid from '../components/CourseCardGrid.vue';
</script>

<style scoped></style>
