import { createI18n } from 'vue-i18n';
import ptBR from './languages/pt-BR';
import enUS from './languages/en-US';

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbacklocale: 'en',
  messages: {
    en: enUS,
    pt: ptBR
  },
  datetimeFormats: {
    en: {
      hour: {
        timeStyle: 'short',
        hour12: true
      },
      date: {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      }
    },
    pt: {
      hour: {
        timeStyle: 'short',
        hour12: false
      },
      date: {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      }
    }
  }
});
