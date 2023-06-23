import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // vue router 추가
import '@/assets/js/webix.css';
import './assets/common.css'

const app = createApp(App);
app.use(router).mount('#app');