<template>
  <v-btn text @click="cerrarSesion">Cerrar Sesión</v-btn>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions("sesion", ["cerrarSesion"])
  }
}
</script>

<style>
</style>