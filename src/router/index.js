import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import("../views/contact.vue")
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import("../views/search.vue")
  },
  {
    path: "/more",
    name: "More",
    component: () =>
      import("../views/more.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
