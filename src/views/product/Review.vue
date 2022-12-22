<template>
  <div class="review-list">
    <h1>리뷰 목록</h1>
    <!-- 구현 방법은 상품 목록과 거의 같습니다. -->
    <ul>
      <li v-for="{rid, user} in list" :key="rid">
        {{user}}
      </li>
    </ul>
  </div>
</template>

<script>
import reviews from "../../api/reviews";
export default {
  name: "Review",
  computed: {
    list: () => reviews.fetch()
  }
}
</script>

<style scoped>

</style>