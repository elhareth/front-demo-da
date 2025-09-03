import { createI18n } from 'vue-i18n';

// Import JSON files
import en from './locales/en.json';
import ar from './locales/ar.json';

const messages = {en, ar};

const i18n = createI18n({
  legacy: false, // Enables Composition API
  globalInjection: true, // Allows using $t globally
  locale: 'ar', // Default language
  messages
});

export default i18n;