<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h3>바인드와 이벤트를 사용한 경우!!</h3>
    <input type="text" :value="message" @input="doUpdate">
    <EditForm></EditForm>
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/product" >상품 정보</router-link>
      <router-view></router-view>
    </nav>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import EditForm from "./components/EditForm.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    EditForm
  },
  computed: {
    message() {
      console.log('메시지 호출!!')
      return this.$store.getters.message
    }
  },
  methods: {
    doUpdate: function (event) {
      this.$store.dispatch('doUpdate', event.target.value)
    }
  }
}
</script>

<style>
@import "style.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
