import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Product from "./views/Product.vue";
import ProductList from "./views/ProductList.vue";
import ProductHome from "./views/product/ProductHome.vue";
import Review from "./views/product/Review.vue";
import ReviewDetail from "./views/product/ReviewDetail.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "/my-app/",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/product",
      component: ProductList
    },
    {
      path: "/product/:id",
      component: Product,
      props: route => ({id: Number(route.params.id)}),
      children: [
        {
          name: 'product-home',
          path: '',
          component: ProductHome
        },
        {
          name: 'product-review',
          path: 'review',
          component: Review
        },
        {
          name: 'review-detail',
          path: 'review/:rid',
          component: ReviewDetail,
          props: route => ({
            rid: Number(route.params.rid)
          })
        },

      ]
    }
  ]
});

export default router;
