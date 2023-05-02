import Vue3Toastity, { type ToastContainerOptions } from 'vue3-toastify';

const toastConfigOptions: ToastContainerOptions = {
  autoClose: 4000,
  newestOnTop: true,
  limit: 3
};

export { Vue3Toastity, toastConfigOptions };
