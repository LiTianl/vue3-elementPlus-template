import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import pinia from './pinia'
import router from './router'
import './permission'

const app = createApp(App)

// 注册全局组件
import * as comp  from './global-component'
Object.entries(comp).forEach(([key, component]) => {
  app.component(key, component)
})

app.use(pinia).use(router).mount('#app')
