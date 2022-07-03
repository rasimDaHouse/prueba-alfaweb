<template>
  <v-layout style="gap: 10px" wrap>
    <v-flex v-for="curso in cursos" :key="curso.id">
      <CursoCard :value="curso" />
    </v-flex>
  </v-layout>
</template>

<script>
import CursoCard from '@/components/CursoCard.vue';
import { mapState, mapActions } from 'vuex';
export default {
  components: {
    CursoCard,
  },
  computed: {
    ...mapState('cursos', {
      cursos: (state) => state.list,
    }),
  },
  methods: {
    ...mapActions('cursos', {
      getAllCursos: 'getAll',
    }),
  },
  mounted() {
    this.getAllCursos();
  },
};
</script>

<style></style>
