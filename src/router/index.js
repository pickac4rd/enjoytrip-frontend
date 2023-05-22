import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AttractionListView from "../views/AttractionListView.vue";
import AttractionDetailView from "../views/AttractionDetailView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/list/:page",
    name: "list",
    component: AttractionListView,
  },
  {
    path: "/detail",
    name: "detail",
    component: AttractionDetailView,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
