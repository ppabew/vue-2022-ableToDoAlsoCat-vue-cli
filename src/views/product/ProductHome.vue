<template>
  <div class="product-home">
    <h1>상품 상세!!</h1>
  </div>
</template>

<script>
export default {
  name: "ProductHome",
  props: {
    hid: Number
  },
  created: function() {
    console.log('숫자 : ' + this.hid)
  }
}
</script>

<style scoped>

</style>
