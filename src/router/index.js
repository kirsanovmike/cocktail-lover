import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   redirect: { name: "home" },
  // },
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/main/index.vue"),
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: () => import("@/pages/privacypolicy/index.vue"),
  },
  {
    path: "/terms-and-conditions",
    name: "terms-and-conditions",
    component: () => import("@/pages/termsandconditions/index.vue"),
  },
  // {
  //   path: "*",
  //   redirect: "/",
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
