import './assets/main.css'

import { createApp } from 'vue'
import router from '@/router/index.js'
import App from './App.vue'
import '@/assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mount('#app')
