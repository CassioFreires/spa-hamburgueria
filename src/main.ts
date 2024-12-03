import './assets/main.css'
import router from './routers'
import { createApp } from 'vue'
import App from './App.vue'
// Importando o Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Importando o Bootstrap JS (se você precisar de funcionalidades como modais, dropdowns, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import store from './store'

createApp(App)
.use(store)
.use(router)
.mount('#app')
