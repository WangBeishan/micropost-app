import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Help from '../components/Help.vue'
import UserList from '../components/UserList.vue'
import Microposts from '../components/Microposts.vue'
import Welcome from '../components/Welcome.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import User from '../components/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Welcome,
  },
  {
    path: '/home',
    component: Home,
    redirect: "/microposts",
    children: [
      { path: '/microposts', component: Microposts },
      { path: '/about', component: About },
      { path: '/userList', component: UserList},
      { path: '/help', component: Help },
      { path: '/users/:id', component: User }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: "/register",
    component: Register
  }
]

const router = new VueRouter({
  routes
})

// 掛載路由導航守衛
router.beforeEach((to, from, next) => {
  const userFlag = window.sessionStorage.getItem("user");
  next();
})

export default router
