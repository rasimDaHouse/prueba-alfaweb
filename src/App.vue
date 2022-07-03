<template>
  <v-app>
    <v-app-bar app color="primary" dark @click="drawer = !drawer">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title> Cursos Alfaweb </v-app-bar-title>
      <v-spacer></v-spacer>

      <BarraSesion v-if="loginActivo" />
      <IniciarSesionBtn v-if="!loginActivo" link to="/iniciarsesion" />
    </v-app-bar>

    <v-navigation-drawer app clipped v-model="drawer">
      <v-list nav>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Principal</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/cursos">
          <v-list-item-icon>
            <v-icon>mdi-book-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Administrar Cursos</v-list-item-title>
        </v-list-item>
      </v-list>
      <CerrarSesionBtn v-if="loginActivo" />
    </v-navigation-drawer>

    <v-main>
      <v-container style="height: 100%">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import BarraSesion from '@/components/BarraSesion';
import IniciarSesionBtn from '@/components/IniciarSesionBtn';
import CerrarSesionBtn from '@/components/CerrarSesionBtn';
export default {
  components: {
    BarraSesion,
    IniciarSesionBtn,
    CerrarSesionBtn,
  },
  data: () => ({
    drawer: false,
  }),
  computed: {
    ...mapGetters('sesion', ['loginActivo']),
  },
  mounted() {
    this.$store.dispatch('sesion/subscribeToAuthStateChange');
  },
};
</script>

<style></style>
