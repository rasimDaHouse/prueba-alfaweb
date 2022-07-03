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
        if(usuario) Router.push("/home")
      });
    },
    async inicioPasswordEmail({ commit }, credentials) {
      commit('SET_LOADING', true);
      try {
        await Firebase.auth().inicioPasswordEmail(
          credentials.email,
          credentials.password
        );
      } catch (e) {
        console.error('error', e);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async crearUsuario({ commit }, nuevoUsuario) {
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
    async cerrarSesion({ commit }) {
      commit('SET_LOADING', true);
      try {
        await Firebase.auth().cerrarSesion();
      } catch (e) {
        console.error('Error al iniciar sesión', e);
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },
};