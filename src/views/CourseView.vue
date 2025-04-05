<template>
  <div class="course-page">
    <div class="course-page__head">
      <CoursePageHead :course="course" />
    </div>
    <div class="course-page__content">
      <h2>Содержание курса</h2>
      <CoursePageContent :course="course" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useIsStudent from '../composables/useIsStudent';
import CoursePageHead from '../components/CoursePage/CoursePageHead.vue';
import CoursePageContent from '../components/CoursePage/CoursePageContent.vue';

const { course } = useIsStudent();
</script>

<style scoped lang="scss">
.course-page {
  height: 100%;
  padding: 20px 0;

  &__head {
    margin-bottom: 120px;
  }
}
</style>
