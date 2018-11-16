import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 동기 처리
  mutations: {
    INCREASE(state) {
      state.count += 1;
    },
    DECREASE(state) {
      state.count -= 1;
    },
    INCREASE_TEN(state) {
      state.count += 10;
    },
    DECREASE_TEN(state) {
      state.count -= 10;
    },
    RESET(state) {
      state.count = 0;
    }
  },
  // 비동기 처리
  actions: {}
});
