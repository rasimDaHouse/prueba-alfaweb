import { DB } from '@/plugins/firebase';

export const coursesModule = {
  namespaced: true,
  state: {
    list: [],
    loading: false,
  },
  getters: {
    totalQuota(state) {
      return state.list.reduce((accumulator, course) => {
        accumulator += course.quota;
        return accumulator;
      }, 0);
    },
    totalInscribed(state) {
      return state.list.reduce((accumulator, course) => {
        accumulator += course.inscribed;
        return accumulator;
      }, 0);
    },
    totalQuotaAvailable(state, getters) {
      return getters.totalQuota - getters.totalInscribed;
    },
    totalFinished(state) {
      return state.list.reduce((accumulator, course) => {
        if (course.finished) accumulator++;
        return accumulator;
      }, 0);
    },
    totalActive(state, getters) {
      return state.list.length - getters.totalFinished;
    },
    totalCourses(state) {
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
        const courses$ = await DB.collection('courses').get();
        const courses = [];

        courses$.forEach((document) => {
          courses.push({ ...document.data(), id: document.id });
        });

        commit('SET_LIST', courses);
      } catch (error) {
        console.error(error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async createOne({ commit }, newCourse) {
      commit('SET_LOADING', true);
      try {
        await DB.collection('courses').add(newCourse);
      } catch (error) {
        console.error(error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },
};
