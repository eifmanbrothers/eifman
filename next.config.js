const nextTranslate = require('next-translate')

module.exports = {
  ...nextTranslate(),
  images: {
    domains: ['avatars.mds.yandex.net', 'pos.gosuslugi.ru', 'localhost']
  },
  // reactStrictMode: true,
  // i18n: {
  //   locales: ['en', 'ru'],
  //   defaultLocale: 'en',
  //   localeDetection: true,
  // },
  // trailingSlash: true,
}