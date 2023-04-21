import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Vue3Toastity, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App);

app.use(router);
app.use(Vue3Toastity, {
  autoClose: 4000,
  newestOnTop: true,
  limit: 3
} as ToastContainerOptions);

app.mount('#app');
