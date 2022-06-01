import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/marketplace",
    name: "marketplace",
    redirect: {
      name: "marketplace-index",
    },
    meta: {
      group: "marketplace",
    },
    component: () =>
      import(
        /* webpackChunkName: "marketplace" */ "@/layouts/MarketplaceLayout.vue"
      ),
    children: [
      {
        path: "index",
        name: "marketplace-index",
        component: () =>
          import(
            /* webpackChunkName: "marketplace-index" */ "@/views/marketplace/Marketplace.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
