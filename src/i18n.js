import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import intervalPlural from 'i18next-intervalplural-postprocessor';
import moment from 'moment';
  
i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.use(intervalPlural)
.init({
    fallbackLng: 'en',
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false,
        format: (value, format) => {
            console.log(value);
            if (value instanceof Date) {
            return moment(value).format(format);
            }
            return value;
        }
    }
});

export default i18n;
