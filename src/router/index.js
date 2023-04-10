import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Category from '../views/Category.vue';
import CartView from '../views/CartView.vue';
import OrdersView from '../views/OrdersView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/orders',
    name: 'OrdersView',
    component: OrdersView
  },
  {
    path: '/Cart',
    name: 'CartView',
    component: CartView
  },
  {
    path: '/:category',
    component: Category
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
