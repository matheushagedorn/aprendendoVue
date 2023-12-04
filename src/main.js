import './assets/css/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import { Model } from 'vue-api-query'
Model.$http = axios;

const app = createApp(App)

app.use(router)

app.mount('#app')
