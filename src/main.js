/**
 * 项目的启动入口 main.js
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 加载element 组件库
import ElementUI from 'element-ui'

// 加载element 组件库样式
import 'element-ui/lib/theme-chalk/index.css'

// 加载全局样式文件
import './styles/index.less'

// 全局注册element 组件库
Vue.use(ElementUI)

/**
 * main.js 入口文件
 * 1. 加载vue
 * 2. 加载根组件（src/App.vue）
 * 3. 加载路由文件
 */

// 关闭生产环境提示
Vue.config.productionTip = false

/**
 * 创建Vue根实例
 * 把router配置到根实例当中
 * 通过render方法把APP根组件渲染到 #app入口节点
 */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app') // el: '#app' 等价于 $mount('#app')
