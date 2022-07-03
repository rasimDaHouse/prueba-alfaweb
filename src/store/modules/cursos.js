import { DB } from '@/plugins/firebase';

export const cursosModule = {
  namespaced: true,
  state: {
    list: [],
    loading: false,
  },
  getters: {
    totalAlumnosPermitidos(state) {
      return state.list.reduce((accumulator, curso) => {
        accumulator += curso.quota;
        return accumulator;
      }, 0);
    },
    totalAlumnosInscritos(state) {
      return state.list.reduce((accumulator, curso) => {
        accumulator += curso.enrolled;
        return accumulator;
      }, 0);
    },
    totalCuposDisponibles( getters) {
      return getters.totalAlumnosPermitidos - getters.totalAlumnosInscritos;
    },
    totalCursosFinalizados(state) {
      return state.list.reduce((accumulator, curso) => {
        if (curso.finished) accumulator++;
        return accumulator;
      }, 0);
    },
    totalCursosActivos(state, getters) {
      return state.list.length - getters.totalCursosActivos;
    },
    totalCursos(state) {
      return state.list.length;
    },
  },
  mutations: {
    SET_LIST(state, newList) {
      state.list = newList;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },
  actions: {
    async getAll({ commit }) {
      commit('SET_LOADING', true);
      try {
        const cursos$ = await DB.collection('cursos').get();
        const cursos = [];

        cursos$.forEach((document) => {
          cursos.push({ ...document.data(), id: document.id });
        });

        commit('SET_LIST', cursos);
      } catch (error) {
        console.error(error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async createOne({ commit }, cursoNuevo) {
      commit('SET_LOADING', true);
      try {
        await DB.collection('cursos').add(cursoNuevo);
      } catch (error) {
        console.error(error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },
};