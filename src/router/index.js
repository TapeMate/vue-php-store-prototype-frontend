import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import ShoppingCardView from "../views/ShoppingCardView.vue";
import WishListView from "../views/WishListView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
  },
  {
    path: "/card",
    name: "card",
    component: ShoppingCardView,
  },
  {
    path: "/wish",
    name: "wish",
    component: WishListView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
