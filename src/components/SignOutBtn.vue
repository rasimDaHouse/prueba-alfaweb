<template>
  <v-btn text @click="signOut">Cerrar Sesión</v-btn>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions("session", ["signOut"])
  }
}
</script>

<style>
</style>