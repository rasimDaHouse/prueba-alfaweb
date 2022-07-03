<template>
  <v-dialog v-model="dialog" width="500px">
    <template #activator="{ on }">
      <v-btn color="info" v-on="on">Agregar curso</v-btn>
    </template>
    <v-card>
      <v-form @submit.prevent="handleFormSubmit" ref="form">
        <v-card-title>Agregando curso</v-card-title>
        <v-card-text>
          <v-text-field
            label="Nombre"
            :rules="[required]"
            v-model="course.name"
          ></v-text-field>
          <v-text-field
            label="URL de la Imagen del Curso"
            v-model="course.img"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Cupos del curso"
            v-model.number="course.quota"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Inscritos en el curso"
            v-model.number="course.inscribed"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Duración del curso"
            v-model="course.duration"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Costo del curso"
            v-model.number="course.price"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Fecha de registro"
            v-model="course.date"
            :rules="[required]"
          ></v-text-field>
          <v-textarea
            label="Descrición del curso"
            v-model="course.description"
            :rules="[required]"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" color="green">Agregar</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: () => ({
    dialog: false,
    course: {
      name: '',
      description: '',
      img: '',
      quota: null,
      inscribed: null,
      duration: '',
      price: null,
      date: '',
      finished: false
    },
  }),
  methods: {
    ...mapActions('courses', {
      createCourse: 'createOne',
      getAllCourses: 'getAll',
    }),
    required(value) {
      return !!value || 'Este campo es obligatorio';
    },
    async handleFormSubmit() {
      if (this.$refs.form.validate()) {
        await this.createCourse({ ...this.course });
        this.dialog = false;
        await this.getAllCourses();
      }
    },
  },
};
</script>

<style></style>
