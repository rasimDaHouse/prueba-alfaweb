import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '@/store/';

import SignIn from '@/views/SignInView.vue';
import SignUp from '@/views/SignUpView.vue';
import Courses from '@/views/CoursesView.vue';
import EditCourse from '@/views/EditCourseView.vue';
import CoursesHome from '@/views/CoursesHomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/home',
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: { requireLogin: false },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: { requireLogin: false },
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses,
    meta: { requireLogin: true },
  },
  {
    path: '/courses/:courseId',
    name: 'EditCourse',
    component: EditCourse,
    meta: { requireLogin: true },
  },
  {
    path: '/home',
    name: 'CoursesHome',
    component: CoursesHome,
    meta: { requireLogin: false },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requireLogin = to.meta.requireLogin;
  const activeLogin = Store.getters['session/activeLogin'];
  if (requireLogin) {
    if (activeLogin) {
      next();
    } else {
      next('/signin');
    }
  } else {
    next();
  }
});

export default router;
