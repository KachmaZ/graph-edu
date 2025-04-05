<template>
  <div class="my-course-head" :style="cssProps">
    <h1 class="my-course-head__title">{{ course.name }}</h1>
  </div>
</template>

<script setup lang="ts">
import useCourseTheme from '@/composables/useCourseTheme';
import type { EduCourse } from '@/types';

const props = defineProps<{
  course: EduCourse;
}>();

const cssProps = useCourseTheme(props.course, 'small-banner');
</script>

<style scoped lang="scss">
.my-course-head {
  height: 250px;
  padding: 80px 100px;

  display: flex;
  align-items: center;

  background-size: cover;
  color: $text-black;
  border-radius: 25px;
}
</style>
