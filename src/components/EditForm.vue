<template>
  <div class="edit-form">
    <h3>v-model를 사용한 경우</h3>
    <input v-model="message2">
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  computed: {
    message() {
      return this.$store.getters.message
    },
    message2: {
      get() { return this.$store.getters.message },
      set(value) { this.$store.dispatch('doUpdate', value) }
    }
  },
  methods: {
    doUpdate(event) {
      // input의 값을 기반으로 디스패치하기
      this.$store.dispatch('doUpdate', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
