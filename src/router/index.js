import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import category from '../views/category.vue'
import cart from '../views/cart.vue'
import mine from '../views/mine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }

    {
    path: '/category',
     name: 'category',
     component: category
    },
    {
     path: '/cart',
    name: 'cart',
    component: cart
    },
    {
     path: '/mine',
     name: 'mine',
     component: mine
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
