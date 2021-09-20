import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * 在 VueCLI创建的项目中 @ 表示 src目录
 * 他是 src 目录的路径别名
 * 好处：不受当前文件路径影响
 */
import Login from '@/views/login'

// 配置路由
Vue.use(VueRouter)

// 配置路由表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

// 创建router实例
const router = new VueRouter({
  routes
})

// 导出router实例
export default router
