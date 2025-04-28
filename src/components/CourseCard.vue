<template>
  <div class="course-card" @click="cardClickHandler(course.id)">
    <div class="course-card--desk">
      <img class="course-card__img" :src="imageUrl" alt="" />
      <div>
        <h3 class="course-card__title">{{ course.name }}</h3>
        <div class="course-card__description text-small">
          {{ course.description }}
        </div>
      </div>
      <div class="course-card__time text-small">Срок обучения: 3 месяца</div>
    </div>
    <div class="course-card--mobile">
      <img class="course-card__img" :src="imageUrl" alt="" />
      <div>
        <h4>{{ course.name }}</h4>
        <div class="course-card__time text-small">Срок обучения: 3 месяца</div>
      </div>
    </div>
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

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;

  &--desk {
    padding: 45px;
    gap: 35px;
    @include respond-to(sm) {
      display: none;
    }
  }

  &--mobile {
    padding: 20px;
    gap: 20px;
    display: none;

    @include respond-to(sm) {
      display: flex;
    }

    .course-card {
      &__img {
        width: 50px;
        height: 50px;
      }
    }
  }

  color: $text-black;
  background-color: v-bind('cssProps.backgroundColor');
  background-image: v-bind('cssProps.backgroundImage');

  @include respond-to(sm) {
    height: auto;
    flex-direction: row;
  }

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

    @include respond-to(sm) {
      display: none;
    }
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
