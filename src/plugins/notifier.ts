import { toast } from 'vue3-toastify';
import type { AutoClose, NotifierOptions, NotificationId } from '@/types/notifier';

class Notifier {
  private options: NotifierOptions = {
    theme: 'auto',
    transition: 'bounce'
  };

  constructor() {}

  success(message: string, autoClose?: AutoClose, notificationId?: NotificationId) {
    toast.success(message, { ...this.options, autoClose, toastId: notificationId });
  }

  error(message: string, autoClose: AutoClose = false, notificationId?: NotificationId) {
    toast.error(message, { ...this.options, autoClose, toastId: notificationId });
  }

  clearAll() {
    toast.clearAll();
  }
}

const notifier = new Notifier();

export default notifier;
