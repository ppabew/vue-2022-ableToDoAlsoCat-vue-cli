<template>
  <div class="product" v-if="item" key="product">
    <h1>상품 정보</h1>
    <table class="product-table">
      <tr>
        <th>제목</th>
        <th>내용</th>
      </tr>
      <tr>
        <td>상품 이름</td>
        <td>{{ item.name }}</td>
      </tr>
      <tr>
        <td>가격</td>
        <td>{{ item.price }}</td>
      </tr>
      <tr>
        <td>상품 설명</td>
        <td>{{ item.content }}</td>
      </tr>
    </table>
    <p>이 페이지는 ID.{{ id }}의 상세 정보를 출력합니다.</p>
    <div class="product-review">
      <h1>{{detail.name}}</h1>
    </div>
    <div class="products">
      <nav class="nav">
        <router-link :to="{ name: 'product-home' }" exact>상품 상세</router-link>
        <router-link :to="{ name: 'product-review' }">리뷰</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </div>
  <div v-else key="loading">
    상품 정보를 읽어 들이고 있습니다...
  </div>
</template>

<script>
import products from "../api/products";
import {mapGetters} from "vuex";
export default {
  name : "Product",
  props: {
    id: Number
  },
  computed: mapGetters('product', ['detail']),
  data() {
    return {
      item: null
    }
  },
  watch: {
    id: {
      handler() {
        products.asyncFind(this.id, item => {
          this.item = item
        })
      }, immediate: true
    }
  }
}
</script>

<style scoped>
table {
  width: 300px; /* 정렬하려는 요소의 넓이를 반드시 지정 */
  margin: 0 auto;
}
table, th, td {
  border: 1px solid black;
}
</style>