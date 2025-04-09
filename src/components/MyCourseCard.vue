<template>
  <div class="my-course-card" @click="() => cardClickHandler(course.id)">
    <div class="my-course-card__img" :style="cssProps">
      <img :src="imageUrl" />
    </div>
    <div class="my-course-card__content">
      <div class="title-with-progress">
        <h3>{{ course.name }}</h3>
      </div>
      <RouterLink :to="{}" class="continue-link text-main"
        >Продолжить обучение <RightArrowIcon
      /></RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { EduCourse } from '../types';
import useCourseTheme from '../composables/useCourseTheme';
import router from '../router';
import useIsStudent from '../composables/useIsStudent';
import RightArrowIcon from '@/assets/images/icons/arrow-right.svg?component';

const props = defineProps<{
  course: EduCourse;
}>();

const { isStudent, setCourse } = useIsStudent();

const imageUrl = computed(
  () => new URL(`../assets/images/${props.course.img}`, import.meta.url).href,
);

const cardClickHandler = (courseId: string) => {
  setCourse(courseId);
  router.push({ name: isStudent ? 'StudentCoursePage' : 'CoursePage', params: { courseId } });
};

const cssProps = useCourseTheme(props.course, 'card');
</script>

<style scoped lang="scss">
.my-course-card {
  width: 100%;
  height: 278px;

  padding: 45px;

  display: flex;
  align-items: center;
  gap: 40px;

  border-radius: 25px;

  background-color: $bg-transparency;

  &:hover {
    background-color: $bg-transparency-hover;
  }

  &:active {
    background-color: $bg-transparency-pressing;
  }

  &__img {
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;

    img {
      width: 130px;
    }
  }

  &__content {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .continue-link {
      display: flex;
      align-items: center;
      gap: 5px;

      color: $text-light-grey;
    }
  }
}
</style>
