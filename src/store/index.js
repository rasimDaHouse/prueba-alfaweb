import Vue from 'vue';
import Vuex from 'vuex';

import { sessionModule as session } from '@/store/modules/session.js';
import { coursesModule as courses} from "@/store/modules/courses.js"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    session,
    courses
  },
});
