import type { ToastTheme, ToastTransition } from 'vue3-toastify';

export type AutoClose = number | boolean | undefined;

export type NotificationId = string | undefined;

export type NotifierOptions = {
  theme: ToastTheme;
  transition: ToastTransition;
};
