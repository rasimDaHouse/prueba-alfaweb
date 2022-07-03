import Store from '@/store/';
import Vue from 'vue';
import VueRouter from 'vue-router';

import Cursos from '@/views/Cursos.vue';
import CursosHome from '@/views/CursosHome.vue';
import EditarCursos from '@/views/EditarCursos.vue';
import IniciarSesion from '@/views/IniciarSesion.vue';
import Registrarse from '@/views/Registrarse.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/home',
  },
  {
    path: '/iniciarsesion',
    name: 'IniciarSesion',
    component: IniciarSesion,
    meta: { loginRequerido: false },
  },
  {
    path: '/registrarse',
    name: 'Registrarse',
    component: Registrarse,
    meta: { loginRequerido: false },
  },
  {
    path: '/cursos',
    name: 'Cursos',
    component: Cursos,
    meta: { loginRequerido: true },
  },
  {
    path: '/cursos/:cursoId',
    name: 'EditarCursos',
    component: EditarCursos,
    meta: { loginRequerido: true },
  },
  {
    path: '/home',
    name: 'CursosHome',
    component: CursosHome,
    meta: { loginRequerido: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loginRequerido = to.meta.loginRequerido;
  const loginActivo = Store.getters['sesion/loginActivo'];
  if (loginRequerido) {
    if (loginActivo) {
      next();
    } else {
      next('/iniciarsesion');
    }
  } else {
    next();
  }
});

export default router;
