<template>
<div>
  <div class="product-list"><h1>상품 목록</h1></div>
  <ul>
    <li v-for="{id, name} in list" :key="id">
      <router-link :to="`/product/${id}`">{{name}}</router-link>
    </li>
  </ul>
</div>
</template>

<script>
import products from "../api/products";
export default {
  name: "ProductList",
  computed: {
    list: () => {
      return products.fetch()
    }
  }
}
</script>

<style scoped>

</style>
