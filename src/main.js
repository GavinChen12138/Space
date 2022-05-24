import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/tailwind.css'
import '@splinetool/runtime'
import 'html2canvas'
createApp(App).use(router).mount('#app')
