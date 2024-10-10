// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          Главная: 'Home',
          Членство: 'About',
          // Другие переводы
        },
      },
      ru: {
        translation: {
          Главная: 'Главная',
          Членство: 'О нас',
          // Другие переводы
        },
      },
    },
    lng: 'ru', // язык по умолчанию
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // не экранировать значения
    },
  });

export default i18n;
