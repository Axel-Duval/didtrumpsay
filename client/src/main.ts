import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importing the global css file
import "@/assets/global.scss"

createApp(App).use(router).mount('#app')
