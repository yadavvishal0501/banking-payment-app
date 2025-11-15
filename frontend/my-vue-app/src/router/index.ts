import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import NeftPayment from "../pages/NeftPayment.vue";
import RtgsPayment from "../pages/RtgsPayment.vue";
import UpiPayment from "../pages/UpiPayment.vue";
import LoginPage from "../pages/Login.vue";

const routes = [
  { path: "/login", component: LoginPage },
  { path: "/", component: HomePage },
  { path: "/payments/neft", component: NeftPayment },
  { path: "/payments/rtgs", component: RtgsPayment },
  { path: "/payments/upi", component: UpiPayment }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 🔒 Route Guard
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("userId");

  if (!loggedIn && to.path !== "/login") {
    next("/login");
  } else {
    next();
  }
});

export default router;
