// const withCSS = require("@zeit/next-css");
require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')
const withPWA = require('next-pwa')

const withImages = require('next-images')

module.exports = withPWA(withImages({
    inlineImageLimit: 16384,
    pwa: {
        dest: 'public'
      },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
      },
      images: {
        disableStaticImages: true
    },
    webpack(config, options) {
        config.plugins = config.plugins || [];
        config.plugins = [
            ...config.plugins,

            // Read the .env file
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
        ];
        return config
    }
}));