module.exports = {
    i18n: {
        locales: ['en', 'ru', 'uk', 'es'],
        defaultLocale: 'ru',
        localePath:
          typeof window === 'undefined'
            ? require('path').resolve('./public/locales')
            : '/locales',
        localeDetection: true,
    },
};
