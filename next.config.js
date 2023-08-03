const nextTranslate = require("next-translate");

module.exports = {
  ...nextTranslate(),
  images: {
    domains: [
      "avatars.mds.yandex.net",
      "pos.gosuslugi.ru",
      "localhost",
      "127.0.0.1",
      "api.eifman.com",
    ],
  },
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  reactStrictMode: true,
  // i18n: {
  //   locales: ["default", "en", "ru"],
  //   defaultLocale: "default",
  //   localeDetection: true,
  // },
  // trailingSlash: true,
};
