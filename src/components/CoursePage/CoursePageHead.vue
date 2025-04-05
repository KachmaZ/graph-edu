<template>
  <div class="course-head" :style="cssProps">
    <h1 class="course-head__title">{{ course.name }}</h1>
    <div class="course-head__description text-big">
      {{ course.description }}
    </div>
    <UIButton class="course-head__btn" variant="primary">Начать учиться</UIButton>
  </div>
</template>

<script setup lang="ts">
import useCourseTheme from '@/composables/useCourseTheme';
import type { EduCourse } from '@/types';
import UIButton from '@/components/UIkit/UIButton.vue';

const props = defineProps<{
  course: EduCourse;
}>();

const cssProps = useCourseTheme(props.course, 'big-banner');
</script>

<style scoped lang="scss">
.course-head {
  height: 560px;
  padding: 80px 100px;

  background-size: cover;
  color: $text-black;
  border-radius: 25px;

  &__title {
    margin-bottom: 90px;
  }

  &__description {
    width: 470px;
    margin-bottom: 35px;
  }

  &__btn {
    width: 270px;
  }
}
</style>
