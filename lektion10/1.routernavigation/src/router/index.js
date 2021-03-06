import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Booking from '../views/booking/Booking'
import BookingDetails from '../views/booking/Details'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking
  },
  {
    path: '/booking/details/:id',
    name: 'BookingDetails',
    component: BookingDetails
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
    path: '/integrity',
    name: 'Integrity',
 
    component: () => import('../views/Integrity.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
