import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import pinia from './pinia'

createApp(App).use(pinia).mount('#app')
