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
            v-model="curso.name"
          ></v-text-field>
          <v-text-field
            label="URL de la Imagen del Curso"
            v-model="curso.img"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Cupos del curso"
            v-model.number="curso.quota"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Inscritos en el curso"
            v-model.number="curso.enrolled"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Duración del curso"
            v-model="curso.span"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Costo del curso"
            v-model.number="curso.price"
            :rules="[required]"
          ></v-text-field>
          <v-textarea
            label="Descrición del curso"
            v-model="curso.description"
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
    curso: {
      name: '',
      description: '',
      img: '',
      quota: null,
      enrolled: null,
      span: '',
      price: null,
    },
  }),
  methods: {
    ...mapActions('cursos', {
      crearCurso: 'createOne',
      getAllCursos: 'getAll',
    }),
    required(value) {
      return !!value || 'Este campo es obligatorio';
    },
    async handleFormSubmit() {
      if (this.$refs.form.validate()) {
        await this.crearCurso({ ...this.curso });
        this.dialog = false;
        await this.getAllCursos();
      }
    },
  },
};
</script>

<style></style>