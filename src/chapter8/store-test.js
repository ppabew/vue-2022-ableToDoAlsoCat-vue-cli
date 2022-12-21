import store from "./store.js";
console.log(store.state.count)
store.commit('increment')
console.log(store.state.count)
console.log(store.state.message)
