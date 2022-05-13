import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import '../node_modules/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router).mount('#app')
