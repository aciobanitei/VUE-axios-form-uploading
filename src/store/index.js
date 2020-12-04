import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc123", name: "khatibuser", age: 30 },
    categories: ["sweets", "baryani", "shwarma", "nan", "korma", "barger"],
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    }
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event);
      commit("ADD_EVENT", event);
    }
  },
  getters: {
    getTodoById: state => id => {
      return state.events.find(event => event.id == id);
    }
  },
  modules: {}
});
