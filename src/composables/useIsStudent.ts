import { useRoute } from 'vue-router';
import { useCourseStore } from '../store/courseStore';
import { storeToRefs } from 'pinia';

export default function useIsStudent() {
  const courseStore = useCourseStore();
  const {
    allCourses,
    commonCurrentCourse,
    commonCurrentNode,
    commonCurrentModule,
    userCourses,
    userCurrentCourse,
    userCurrentNode,
    userCurrentModule,
  } = storeToRefs(courseStore);

  const {
    setCommonCurrentCourse,
    setCommonCurrentNode,
    setCommonCurrentModule,
    getCommonNodeById,

    setUserCurrentCourse,
    setUserCurrentNode,
    setUserCurrentModule,
    getStudentNodeById,
  } = courseStore;

  const isStudent = useRoute().path.includes('/student');
  const courseList = isStudent ? userCourses : allCourses;
  const course = isStudent ? userCurrentCourse : commonCurrentCourse;
  const node = isStudent ? userCurrentNode : commonCurrentNode;
  const module = isStudent ? userCurrentModule : commonCurrentModule;

  const setCourse = isStudent ? setUserCurrentCourse : setCommonCurrentCourse;
  const setNode = isStudent ? setUserCurrentNode : setCommonCurrentNode;
  const setModule = isStudent ? setUserCurrentModule : setCommonCurrentModule;

  const getNodeByID = isStudent ? getStudentNodeById : getCommonNodeById;

  return {
    isStudent,

    courseList,
    course,
    node,
    module,

    setCourse,
    setNode,
    setModule,
    getNodeByID,
  };
}
