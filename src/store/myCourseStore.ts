import { defineStore, storeToRefs } from 'pinia';
import { useUserStore } from './userStore';
import type { EduCourse } from '../types';
import { ref } from 'vue';
// @ts-ignore
import COURSES_IN_PROGRESS from '@/data/coursesInProgress.json';

export const useMyCourseStore = defineStore('my-course', () => {
  const { user } = storeToRefs(useUserStore());

  const userCourses = ref<EduCourse[]>(
    user.value
      ? COURSES_IN_PROGRESS.filter((course: EduCourse) => user.value.courses.includes(course.id))
      : [],
  );

  const currentUserCourse = ref<EduCourse>(<EduCourse>{});

  return {
    userCourses,
    currentUserCourse,
  };
});
