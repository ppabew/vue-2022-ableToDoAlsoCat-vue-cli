import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 스토어 만들기
const store = new Vuex.Store({
  state: {
    count: 0,
    message: 'Hello Vue'
  },
  mutations: {
    // Count up하는 뮤테이션 등록하기
    increment(state) {
      state.count++
    }
  }
})
export default store
