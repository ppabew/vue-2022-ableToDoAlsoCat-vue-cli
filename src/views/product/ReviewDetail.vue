<template>
    <div class="review-detail">
      <h1>리뷰 정보</h1>
      <!-- 구현 방법은 상품 정보와 거의 같습니다. -->
      <div v-if="item" key="product">
        <table>
          <tr>
            <th>제목</th>
            <th>내용</th>
          </tr>
          <tr>
            <td>번호</td>
            <td>{{ item.rid }}</td>
          </tr>
          <tr>
            <td>이름</td>
            <td>{{ item.user }}</td>
          </tr>
          <tr>
            <td>리뷰</td>
            <td>{{ item.content }}</td>
          </tr>
        </table>
      </div>
      <div v-else key="loading">
        리뷰를 읽고 있습니다...
      </div>
    </div>
</template>

<script>
import reviews from "../../api/reviews";

export default {
  name: "ReviewDetail",
  props: {
    rid: Number,
    mid: Number
  },
  data() {
    return {
      item: null
    }
  },
  watch: {
    rid: {
      handler() {
        console.log(this.rid)
        reviews.asyncFind(this.mid, this.rid,item => {
          this.item = item
        })
      },
      immediate: true
    }
  }
}
</script>

<style scoped>

</style>
