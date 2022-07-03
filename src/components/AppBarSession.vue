<template>
  <div>
    <v-btn text small>
      {{ userEmail }}
      <v-icon class="ml-2">mdi-logout</v-icon>
    </v-btn>
  </div>

</template>

<script>
import { mapState } from 'vuex';


export default {
    computed: {
        ...mapState("session", ["user"]),
        userEmail() {
            return this.user.email;
        },
    },
};
</script>

<style>
</style>
