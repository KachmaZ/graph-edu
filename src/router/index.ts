import { createRouter, createWebHistory } from 'vue-router';
import CourseGrid from '../views/CourseGrid.vue';
import CoursePageView from '../views/CourseView.vue';
import CourseModuleView from '../views/CourseModuleView.vue';
import LoginView from '../views/LoginView.vue';
import { isAuthenticated, middlewarePipeline } from '../middlewares';
import ProfileView from '../views/ProfileView.vue';
import HeaderLayout from '../layouts/HeaderLayout.vue';
import HeadSidebarLayout from '../layouts/HeadSidebarLayout.vue';
import UIkitView from '../views/UIkitView.vue';
import StudentCourseGridView from '../views/StudentCourseGridView.vue';
import MyCourseView from '../views/MyCourseView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Main',
      path: '/',
      component: CourseGrid,
      meta: {
        layout: HeaderLayout,
      },
    },
    {
      name: 'CoursePage',
      path: '/course/:courseId',
      component: CoursePageView,
      meta: {
        layout: HeaderLayout,
      },
    },
    {
      name: 'CourseModule',
      path: '/course/:courseId/:nodeId',
      component: CourseModuleView,
      meta: {
        layout: HeadSidebarLayout,
      },
    },
    {
      name: 'Login',
      path: '/login',
      component: LoginView,
    },
    {
      name: 'StudentCourseGrid',
      path: '/student',
      component: StudentCourseGridView,
      meta: {
        middlewares: [isAuthenticated],
        layout: HeaderLayout,
      },
    },
    {
      name: 'StudentCoursePage',
      path: '/student/course/:courseId',
      component: MyCourseView,
      meta: {
        middlewares: [isAuthenticated],
        layout: HeaderLayout,
      },
    },
    {
      name: 'StudentCourseModule',
      path: '/student/course/:courseId/:nodeId',
      component: CourseModuleView,
      meta: {
        layout: HeadSidebarLayout,
      },
    },
    {
      name: 'Profile',
      path: '/profile',
      component: ProfileView,
      meta: {
        middlewares: [isAuthenticated],
        layout: HeaderLayout,
      },
    },
    {
      name: 'UIkit',
      path: '/uikit',
      component: UIkitView,
      meta: {
        layout: HeaderLayout,
      },
    },
  ],
});

middlewarePipeline(router);

export default router;
