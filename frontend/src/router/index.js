import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../components/form/login'
import SignUp from '../components/form/signUp'
import newArticle from '../components/form/newArticle'
import singleArticle from "../components/articles/one-article"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path:'/login',
    name:"login",
    component:login
  },
  {
    path:"/SignUp",
    name:"SignUp",
    component:SignUp
  },
  {
    path:"/Createarticle",
    name:"newArticle",
    component:newArticle
  },
  {
    path:"/edit/article/:id",
    name:"editArticle",
    component:newArticle
  },
  {
    path:"/article/:id",
    name:"singleArticle",
    component:singleArticle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
