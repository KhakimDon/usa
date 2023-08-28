import { createStore } from "vuex";

export default createStore({
  state: {
    students: [],
    eventStudent: {}
  },
  getters: {
  },
  mutations: {
    EVENT_M(state,i){
        state.eventStudent = i
    }
  },
  actions: {
    EVENT({commit}, i){
        commit("EVENT_M", i)
    }
  },
  modules: {},
});
