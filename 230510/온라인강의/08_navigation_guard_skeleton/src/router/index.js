import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView.vue'
import LoginView from '@/views/LoginView'
import DogView from '@/views/DogView'
import NotFound404 from '@/views/NotFound404'

Vue.use(VueRouter)

const isLoggedIn = true

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hello/:userName',
    name: 'hello',
    component: HelloView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter(to, from, next) {
      if (isLoggedIn == true) {
        console.log('이미 로그인 함')
        next({ name: 'home'})
      } else {
        next()
      }
    }
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '/dog/:breed',
    name: 'dog',
    component: DogView,
  },
  // 위에서부터 순서대로 내려오면서 path를 찾다가 없으면 여기로 옴 (맨 아래에 404 있어야함)
  {
    path: '*',
    redirect: '/404',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router/index.js
// router.beforeEach((to, from, next) => {
//   // 로그인 여부
//   // const isLoggedIn = true // 로그인 O
//   const isLoggedIn = false // 로그인 X

//   // 로그인이 필요한 페이지 지정
//   // const authPages = ['hello', 'about', 'home'] // 로그인 필요 O
//   const allowAuthPages = ['login'] // 로그인 필요 X

//   // 앞으로 이동할 페이지(to)가 로그인이 필요한 페이지인지 확인
//   // const isAuthRequired = authPages.includes(to.name)
//   const isAuthRequired = !allowAuthPages.includes(to.name)


//   // 로그인이 필요한데 되어있지 않다면 로그인 페이지로 이동
//   if (isAuthRequired && !isLoggedIn) {
//     console.log('Login으로 이동')
//     next({ name: 'login'}) // 로그인 페이지 시도 -> router에서 else로 빠지면서 'to로 이동' 출력됨
//   // 로그인이 필요하지 않거나 되어있다면 다음 페이지로 이동
//   } else {
//     console.log('to로 이동')
//     next()
//   }
// })
export default router
