import en from './en';
import es from './es';
import tn from './tn';

const languages = { en, es, tn };

let currentLang = 'en'; // Default language

const i18n = {
  t: (key) => {
    if (!languages[currentLang][key]) {
      console.warn(`No string for key "${key}" in "${currentLang}"`);
      return key; // Return the key as a fallback
    }
    return languages[currentLang][key];
  },
  changeLanguage: (lang) => {
    currentLang = lang;
  },
};

export default i18n;
