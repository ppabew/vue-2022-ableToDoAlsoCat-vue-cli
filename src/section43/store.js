import Vue from "vue";
import Vuex from "vuex";
import product from "../store/product.js";
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product
  },
  state: {
    message: '초기 메시지!!'
  },
  getters: {
    message(state) {return state.message}
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.message
    }
  },
  actions: {
    doUpdate({commit}, message) {
      commit('setMessage', {message})
    }
  }
})

export default store
