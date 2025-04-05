//@ts-nocheck
import { defineStore, storeToRefs } from 'pinia';
import type { EduCourse, EduNode, EduNodeModule } from '../types';
import RAW_COURSES_DATA from '@/data/courses.json';
import USER_COURSES_DATA from '@/data/coursesInProgress.json';
import { computed, ref } from 'vue';
import { useUserStore } from './userStore';

export const useCourseStore = defineStore('course', () => {
  const COURSES_DATA = RAW_COURSES_DATA as EduCourse[];

  const { user } = storeToRefs(useUserStore());

  // @ts-ignore
  const allCourses = ref<EduCourse[]>([...COURSES_DATA]);

  const commonCurrentCourse = ref<EduCourse>(<EduCourse>{});
  const commonCurrentNode = ref<EduNode>(<EduNode>{});
  const commonCurrentModule = ref<EduNodeModule>();

  const setCommonCurrentCourse = (courseID: string) => {
    const newCourse = allCourses.value.find((course) => course.id === courseID);
    if (newCourse) {
      commonCurrentCourse.value = newCourse;
    }
  };

  const setCommonCurrentNode = (nodeID: string) => {
    const newNode = Object.entries(commonCurrentCourse.value.nodes).find(([_, node]) => {
      return node.id.toString() === nodeID;
    });

    if (newNode) {
      commonCurrentNode.value = newNode[1];

      setCommonCurrentModule(commonCurrentNode.value.modules[0].id);
    }
  };

  const setCommonCurrentModule = (moduleID: string) => {
    const newModule = commonCurrentNode.value.modules.find((module) => module.id === moduleID);

    if (newModule) {
      commonCurrentModule.value = { ...newModule };
    }
  };

  const getCommonNodeById = (nodeID: string) => {
    return Object.values(commonCurrentCourse.value.nodes).find((node) => node.id === nodeID);
  };

  const userCourses = computed<EduCourse[]>(() => {
    if (user.value) {
      return USER_COURSES_DATA.filter((course: EduCourse) =>
        user.value!.courses.includes(course.id),
      );
    } else {
      return [];
    }
  });
  const userCurrentCourse = ref<EduCourse>(<EduCourse>{});
  const userCurrentNode = ref<EduNode>(<EduNode>{});
  const userCurrentModule = ref<EduNodeModule>(<EduNodeModule>{});

  const setUserCurrentCourse = (courseID: string) => {
    const newCourse = userCourses.value.find((course) => course.id === courseID);
    if (newCourse) {
      userCurrentCourse.value = newCourse;
    }
  };

  const setUserCurrentNode = (nodeID: string) => {
    const newNode = Object.entries(userCurrentCourse.value.nodes).find(([id, _]) => id === nodeID);

    if (newNode) {
      userCurrentNode.value = newNode[1];

      setUserCurrentModule(userCurrentNode.value.modules[0].id);
    }
  };

  const setUserCurrentModule = (moduleID: string) => {
    const newModule = userCurrentNode.value.modules.find((module) => module.id === moduleID);

    if (newModule) {
      userCurrentModule.value = { ...newModule };
    }
  };

  const getStudentNodeById = (nodeID: string) => {
    return Object.values(userCurrentCourse.value.nodes).find((node) => node.id === nodeID);
  };

  return {
    allCourses,
    commonCurrentCourse,
    commonCurrentNode,
    commonCurrentModule,
    setCommonCurrentCourse,
    setCommonCurrentNode,
    setCommonCurrentModule,
    getCommonNodeById,

    userCourses,
    userCurrentCourse,
    userCurrentNode,
    userCurrentModule,
    setUserCurrentCourse,
    setUserCurrentNode,
    setUserCurrentModule,
    getStudentNodeById,
  };
});
