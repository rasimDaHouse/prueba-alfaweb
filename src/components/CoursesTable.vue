<template>
  <v-data-table :headers="headers" :items="value">
    <template v-slot:[`item.price`]="{ item }">
      <v-chip color="green" dark>${{ item.price.toLocaleString() }}</v-chip>
    </template>

    <template v-slot:[`item.finished`]="{ item }">
      <v-chip dark :color="item.finished ? 'info' : 'grey lighten-1'">
        {{ item.finished ? 'Si' : 'No' }}
      </v-chip>
    </template>

    <template v-slot:[`item.date`]="{ item }">
      <v-chip dark color="green">
        {{ item.date }}
      </v-chip>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-btn icon @click="removeCourse(item.id)">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-btn icon @click="edit(item.id)">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>

  </v-data-table>
</template>

<script>
import {  mapState, mapActions } from 'vuex';
export default {
  props: ['value'],
  data: () => ({
    headers: [
      {
        text: 'Curso',
        value: 'name',
      },
      {
        text: 'Cupos',
        value: 'quota',
      },
      {
        text: 'Inscritos',
        value: 'inscribed',
      },
      {
        text: 'Duración',
        value: 'duration',
      },
      {
        text: 'Costo',
        value: 'price',
      },
      {
        text: 'Terminado',
        value: 'finished',
      },
      {
        text: 'Fecha',
        value: 'date',
      },
      {
        text: 'Acciones',
        value: 'actions',
      },
    ],
  }),
  computed: {
    ...mapState("courses", {
      courses: (state) => state.list,
      loading: (state) => state.loading,
    }),
  },
  // methods: {
  //   ...mapActions("cursos", {
  //     removeCourse: "removeCourseById",
  //     getAllCourses: "getAll",
  //   }),
  //   async removeCourse(id) {
  //     await this.removeCourseById(id);
  //     await this.getAllCourses();
  //     return this.getAllCourses()
  //   },
  //   // updateCourse() {
  //   //   this.$router.push("/view");
  //   // },
  // }
};
</script>

<style></style>
