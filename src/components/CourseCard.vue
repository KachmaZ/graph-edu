<template>
  <div class="course-card" @click="cardClickHandler(course.id)">
    <h4 class="course-card__title">{{ course.name }}</h4>
    <img class="course-card__img" :src="imageUrl" alt="" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useIsStudent from '../composables/useIsStudent';
import router from '../router';
import type { EduCourse } from '../types';

const { isStudent, setCourse } = useIsStudent();

const props = defineProps<{
  course: EduCourse;
}>();

const imageUrl = computed(
  () => new URL(`../assets/images/${props.course.img}`, import.meta.url).href,
);

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
