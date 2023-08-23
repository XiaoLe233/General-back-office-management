import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView,
    redirect: '/main',  // 重定向:重新指向其它path,会改变网址
    children: [
      // 首页
      {
        path: '/main',
        name: 'main',
        component: () => import('../views/Main.vue')
      },
      // 商品管理
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/User.vue')
      },
      // 用户管理
      {
        path: '/mall',
        name: 'mall',
        component: () => import('../views/Mall.vue')
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('../views/PageOne.vue')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('../views/PageTwo.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
