const withCSS = require("@zeit/next-css");
require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')

const withImages = require('next-images')

module.exports = withCSS(withImages({
    inlineImageLimit: 16384,
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