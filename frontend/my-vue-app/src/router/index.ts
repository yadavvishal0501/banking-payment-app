import { createRouter, createWebHistory } from 'vue-router';
import NeftPayment from '../pages/NeftPayment.vue';
import RtgsPayment from '../pages/RtgsPayment.vue';
import UpiPayment from '../pages/UpiPayment.vue';
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/Login.vue';



const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage }, 
  { path: '/payments/neft', component: NeftPayment },
  { path: '/payments/rtgs', component: RtgsPayment },
  { path: '/payments/upi', component: UpiPayment },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
