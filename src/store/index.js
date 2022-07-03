import Vue from 'vue';
import Vuex from 'vuex';

import { cursosModule as cursos } from "@/store/modules/cursos";
import { sesionModule as sesion } from '@/store/modules/sesion.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sesion,
    cursos
  },
});