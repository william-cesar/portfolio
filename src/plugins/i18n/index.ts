import { createI18n } from 'vue-i18n';
import ptBR from './languages/pt-BR';
import enUS from './languages/en-US';

export default createI18n({
  legacy: false,
  locale: 'pt',
  fallbacklocale: 'en',
  messages: {
    en: enUS,
    pt: ptBR
  }
});
