import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Board",
    params: { userName: "" },
    component: () => import("@/views/board.vue")
  },
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.replace({ path: "*" });

export default router;
