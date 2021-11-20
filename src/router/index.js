import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LandingPage from '../views/LandingPage'
import ListProduct from '../views/ListProduct'
import ProductDetail from '../views/ProductDetail'
import Keranjang from '../views/Keranjang.vue'
import Success from '../views/Success'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/List-product',
    name: 'ListProduct',
    component: ListProduct
  },
   {
    path: '/Product-detail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/Keranjang',
    name: 'Keranjang',
    component: Keranjang
  },
  {
    path: '/Success',
    name: 'Success',
    component: Success
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
