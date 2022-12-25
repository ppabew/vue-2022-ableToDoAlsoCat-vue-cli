<template>
  <div class="review-list">
    <h1>리뷰 목록</h1>
    <ul>
      <li v-for="{rid, user} in reviewList" :key="rid">
        <router-link :to="{name: `review-detail`, params: {mid: `${mid}`,rid: `${rid}`}}">리뷰 번호:{{rid}} 사용자:{{user}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import reviews from "../../api/reviews";

export default {
  name: "Review",
  data() {
    return {
      reviewList: []
    }
  },
  props: {
    mid: {
      type: Number
    }
  },
  created: function() {
    this.reviewList = reviews.fetch(this.mid);
  },
};
</script>

<style scoped>

</style>
