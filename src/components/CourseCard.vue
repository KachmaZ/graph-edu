<template>
  <div class="course-card" @click="cardClickHandler(course.id)">
    <h4 class="course-card__title">{{ course.name }}</h4>
    <img class="course-card__img" :src="`/public/images/${course.img}`" alt="" />
  </div>
</template>

<script setup lang="ts">
import useIsStudent from '../composables/useIsStudent';
import router from '../router';
import type { EduCourse } from '../types';

const { isStudent, setCourse } = useIsStudent();

defineProps<{
  course: EduCourse;
}>();

const cardClickHandler = (courseId: string) => {
  setCourse(courseId);
  router.push({ name: isStudent ? 'StudentCoursePage' : 'CoursePage', params: { courseId } });
};
</script>

<style scoped lang="scss">
.course-card {
  width: 200px;
  height: 300px;
  padding: 24px 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border: 1px solid white;
  border-radius: 20px;

  &__title {
    text-align: center;
  }

  &__img {
    width: 180px;
    height: 180px;
  }
}
</style>
