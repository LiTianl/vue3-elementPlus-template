import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import pinia from './pinia'
import router from './router'
import './permission'

createApp(App).use(pinia).use(router).mount('#app')
