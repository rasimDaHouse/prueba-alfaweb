<template>
  <div>
    <v-layout justify-center>
      <v-flex shrink>
        <h1>Administración</h1>
      </v-flex>
    </v-layout>
    <AddCourseBtn />
    <CoursesTable :value="courses" />
    <CoursesBanners />
  </div>
</template>

<script>
import AddCourseBtn from '@/components/AddCourseBtn.vue';
import CoursesTable from '@/components/CoursesTable.vue';
import CoursesBanners from '@/components/CoursesBanners.vue';
import { mapState, mapActions } from 'vuex';
export default {
  components: { CoursesTable, CoursesBanners, AddCourseBtn },
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
