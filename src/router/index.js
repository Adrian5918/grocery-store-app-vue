import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue';
import login from '../views/login.vue';
import logout from '../views/Logout.vue';
import cartedProductsIndex from '../views/cartedProductsIndex.vue';
import ordersIndex from '../views/ordersIndex.vue';
import storeIndex from '../views/storeIndex.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/signup", 
    name: "Signup",
    component: Signup
  },
  {
    path: "/cartedProductsIndex",
    name: "cartedProductsIndex",
    component: cartedProductsIndex
  },
  {
    path: "/storeIndex",
    nane: "storeIndex",
    component: storeIndex
  },
  {
    path: "/Login",
    name: "Login",
    component: login
  },
  {
    path: "/Logout",
    name: "Logout",
    component: logout
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ordersIndex',
    name: 'ordersIndex',
    component: ordersIndex
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
