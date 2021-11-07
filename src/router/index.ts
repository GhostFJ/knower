/*
 * @Author: FunJust
 * @Date: 2021-11-06 21:05:56
 * @Description:
 */
import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/views/Detail.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
