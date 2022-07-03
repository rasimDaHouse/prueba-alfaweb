<template>
  <v-btn text small>
    {{ usuarioEmail }}
    <v-icon class="ml-2">mdi-login</v-icon>
  </v-btn>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('sesion', ['usuario']),
    usuarioEmail() {
      return this.usuaio.email;
    },
  },
};
</script>

<style></style>