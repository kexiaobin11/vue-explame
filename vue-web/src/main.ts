import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@/mock'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
