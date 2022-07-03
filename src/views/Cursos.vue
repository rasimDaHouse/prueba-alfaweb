<template>
  <div>
    <v-layout justify-center>
      <v-flex shrink>
        <h1>Administración</h1>
      </v-flex>
    </v-layout>
    <AddCursoBtn />
    <CursoTabla :value="cursos" />
    <AlertaCursos />
  </div>
</template>

<script>
import AddCursoBtn from '@/components/AddCursoBtn.vue';
import CursoTabla from '@/components/CursoTabla.vue';
import AlertaCursos from '@/components/AlertaCursos.vue';
import { mapState, mapActions } from 'vuex';
export default {
  components: { CursoTabla, AlertaCursos, AddCursoBtn },
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
