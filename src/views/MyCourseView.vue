<template>
  <div class="my-course-page">
    <div class="my-course-page__head">
      <MyCourseHead :course="course" />
    </div>
    <div class="my-course-page__content">
      <h2>Содержание курса</h2>
      <MyCoursePageContent />
    </div>
  </div>
</template>

<script setup lang="ts">
import MyCourseHead from '../components/MyCoursePage/MyCourseHead.vue';
import MyCoursePageContent from '../components/MyCoursePage/MyCoursePageContent.vue';
import useIsStudent from '../composables/useIsStudent';

const { course } = useIsStudent();
</script>

<style scoped lang="scss">
.my-course-page {
  &__head {
    margin-bottom: 60px;
  }
}
</style>
