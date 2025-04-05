<template>
  <div class="course-card" @click="cardClickHandler(course.id)">
    <img class="course-card__img" :src="imageUrl" alt="" />
    <div class="">
      <h3 class="course-card__title">{{ course.name }}</h3>
      <div class="course-card__description text-small">
        {{ course.description }}
      </div>
    </div>
    <div class="course-card__time text-small">Срок обучения: 3 месяца</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useIsStudent from '../composables/useIsStudent';
import router from '../router';
import type { EduCourse } from '../types';
import useCourseTheme from '../composables/useCourseTheme';

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

const cssProps = useCourseTheme(props.course, 'card');
</script>

<style scoped lang="scss">
.course-card {
  width: 100%;
  height: 520px;
  padding: 45px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  border-radius: 25px;

  color: $text-black;
  background-color: v-bind('cssProps.backgroundColor');
  background-image: v-bind('cssProps.backgroundImage');

  &__title {
    text-align: left;
  }

  &__img {
    height: 200px;
    transition: transform 200ms ease-in;
  }

  &__description {
    width: 100%;
    height: 88px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 4;
    text-align: left;
  }
  &__time {
    width: 100%;
    text-align: left;
  }

  &:hover {
    .course-card {
      &__img {
        transform: scale(1.15);
      }
    }
  }
}
</style>
