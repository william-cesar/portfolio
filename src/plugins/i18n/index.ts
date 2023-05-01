import { createI18n } from 'vue-i18n';
import ptBR from './languages/pt-BR';
import enUS from './languages/en-US';

export default createI18n({
  legacy: false,
  locale: 'pt-BR',
  fallbacklocale: 'en-US',
  messages: {
    en: enUS,
    pt: ptBR
  }
});
