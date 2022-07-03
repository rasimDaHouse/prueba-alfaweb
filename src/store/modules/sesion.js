import Router from '@/router';
import Firebase from 'firebase';

export const sesionModule = {
  namespaced: true,
  state: {
    usuario: null,
    loading: false,
  },
  getters: {
    loginActivo(state) {
      return !!state.usuario;
    },
  },
  mutations: {
    SET_USER(state, nuevoUsuario) {
      state.usuario = nuevoUsuario;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },
  actions: {
    async subscribeToAuthStateChange({ commit }) {
      Firebase.auth().onAuthStateChanged((usuario) => {
        commit('SET_USER', usuario);
        if (usuario) Router.push('/home');
      });
    },
    async InicioPasswordEmail({ commit }, credentials) {
      commit('SET_LOADING', true);
      try {
        await Firebase.auth().InicioPasswordEmail(
          credentials.email,
          credentials.password
        );
      } catch (e) {
        console.error('Error', e);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async crearUsuario({ commit }, newUser) {
      commit('SET_LOADING', true);

      try {
        await Firebase.auth().crearUsuario(
          nuevoUsuario.email,
          nuevoUsuario.password
        );
      } catch (error) {
        console.error(error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async cierreSesion({ commit }) {
      commit('SET_LOADING', true);
      try {
        await Firebase.auth().cierreSesion();
      } catch (e) {
        console.error('Error', e);
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },
};
