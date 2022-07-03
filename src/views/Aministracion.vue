<template>
  <div class="mt-5 container">
    <b-form-input v-model="form.curso" placeholder="aaa"></b-form-input>
    <b-form-input
      class="mt-2"
      type="number"
      v-model="form.cupos"
      placeholder="Cupos"
    ></b-form-input>
    <b-form-input
      class="mt-2"
      type="number"
      v-model="form.inscritos"
      placeholder="Inscritos"
    ></b-form-input>
    <b-form-input
      class="mt-2"
      type="text"
      v-model="form.duracion"
      placeholder="Duracion del curso"
    ></b-form-input>
    <b-form-input
      class="mt-2"
      type="text"
      v-model="form.costo"
      placeholder="Valor"
    ></b-form-input>
    <b-form-input
      class="mt-2"
      type="date"
      v-model="form.fecha"
      placeholder="Fecha"
    ></b-form-input>
    <b-form-input
      class="mt-2"
      type="text"
      v-model="form.descripcion"
      placeholder="descripcion"
    ></b-form-input>
    <b-form-input
      class="mt-2"
      type="text"
      v-model="form.url"
      placeholder="url"
    ></b-form-input>
    <b-form-group label="Curso terminado" v-slot="{ ariaDescribedby }">
      <b-form-radio
        v-model="form.terminado"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="true"
        >Si</b-form-radio
      >
      <b-form-radio
        v-model="form.terminado"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="false"
        >No</b-form-radio
      >
    </b-form-group>
    <button @click="actualizar" class="btn btn-primary">actualizar</button>
    <button @click="volver" class="ml-2 btn btn-warning">Volver</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      form: {
        curso: '',
        cupos: '',
        inscritos: '',
        duracion: '',
        costo: '',
        terminado: '',
        fecha: '',
        descripcion: '',
        url: '',
      },
    };
  },

  computed: {
    ...mapState('cursos', ['doc']),
  },

  methods: {
    ...mapActions('cursos', ['getCurso', 'updateCurso']),
    volver() {
      this.$router.push(`/administracion`);
    },

    async actualizar() {
      const doc = {
        data: this.form,
        id: this.$route.params.id,
      };
      try {
        await this.updateCurso(doc);
      } catch (e) {
        console.log(e);
      } finally {
        this.$router.push(`/administracion`);
      }
    },
  },

  async created() {
    await this.getCurso(this.$route.params.id);
    this.form.curso = this.doc.curso;
    this.form.cupos = this.doc.cupos;
    this.form.inscritos = this.doc.inscritos;
    this.form.duracion = this.doc.duracion;
    this.form.costo = this.doc.costo;
    this.form.terminado = this.doc.terminado;
    this.form.fecha = this.doc.fecha;
    this.form.descripcion = this.doc.descripcion;
    this.form.url = this.doc.url;
  },
  mounted() {},
};
</script>

<style></style>
