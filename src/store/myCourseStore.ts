//@ts-nocheck

import { defineStore, storeToRefs } from 'pinia';
import { useUserStore } from './userStore';
import type { EduCourse } from '../types';
import { ref } from 'vue';
import COURSES_IN_PROGRESS from '@/data/coursesInProgress.json';

export const useMyCourseStore = defineStore('my-course', () => {
  const { user } = storeToRefs(useUserStore());

  const userCourses = ref<EduCourse[]>(
    user.value
      ? COURSES_IN_PROGRESS.filter((course) => user.value!.courses.includes(course.id))
      : [],
  );

  const currentUserCourse = ref<EduCourse>(<EduCourse>{});

  return {
    userCourses,
    currentUserCourse,
  };
});
