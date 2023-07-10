import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dynamic",
    name: "dynamic",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/dynamic/dynamic.vue"),
  },
  {
    path: "/article",
    name: "article",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/article/article.vue"),
  },
  {
    path: "/special",
    name: "special",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/special/special.vue"),
  },
  {
    path: "/message",
    name: "message",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/message/message.vue"),
  },
  {
    path: "/author",
    name: "author",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/author/author.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/detail/detail.vue"),
  },
];

const router = new VueRouter({
  //   mode: "history",
  mode: "hash",
  routes,
});

export default router;
