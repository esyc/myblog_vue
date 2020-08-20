import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Admin from '../components/Admin.vue'
import Post from '../components/Post.vue'
import AddPost from '../components/AddPost.vue'
import Cate from '../components/Cate.vue'
import AddCate from '../components/AddCate.vue'
import Talk from '../components/Talk.vue'
import Home from '../components/Home/Home.vue'
import ShowList from '../components/Home/ShowList.vue'
import AboutMe from '../components/Home/AboutMe.vue'
import Friend from '../components/Home/Friend.vue'
import SeePost from '../components/SeePost.vue'
import ShowListByCate from '../components/Home/ShowListByCate.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home,
    children: [{ path: '/', component: ShowList },
      { path: '/aboutme', component: AboutMe },
      { path: '/friend', component: Friend },
      { path: '/all', component: ShowList },
      { path: '/show', component: SeePost },
      { path: '/bycate', component: ShowListByCate }]
  },
  { path: '/login', component: Login },
  {
    path: '/admin',
    component: Admin,
    redirect: '/post',
    children: [{ path: '/post', component: Post }, { path: '/post/add', component: AddPost }, { path: '/cate', component: Cate }, { path: '/cate/add', component: AddCate },
      { path: '/talk', component: Talk }]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const token = window.sessionStorage.getItem('token')
  if (to.path === '/login') return next()
  if (!token && (to.path === '/admin')) next('login')
  else if (!token && (to.path === '/post')) next('login')
  else if (!token && (to.path === '/post/add')) next('login')
  else if (!token && (to.path === '/cate')) next('login')
  else if (!token && (to.path === '/cate/add')) next('login')
  else if (!token && (to.path === '/talk')) next('login')
  else { next() }
})
export default router
