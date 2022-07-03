<template>
  <v-layout style="gap: 10px" wrap>
    <v-flex v-for="course in courses" :key="course.id">
      <CourseCard :value="course" />
    </v-flex>
  </v-layout>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';
import { mapState, mapActions } from 'vuex';
export default {
  components: {
    CourseCard,
  },
  computed: {
    ...mapState('courses', {
      courses: (state) => state.list,
    }),
  },
  methods: {
    ...mapActions('courses', {
      getAllCourses: 'getAll',
    }),
  },
  mounted() {
    this.getAllCourses();
  },
};
</script>

<style></style>
