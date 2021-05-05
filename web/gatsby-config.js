require('dotenv').config();

const siteConfig = require('./site-config');

const isProd = process.env.NODE_ENV === 'production';
const token = process.env.SANITY_TOKEN;

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    'gatsby-plugin-polyfill-io',
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Montserrat',
              variants: ['400', '500', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Source Code Pro',
              variants: ['900'],
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '5 KM NADZIEI - bieg dla Hospicjum im. Jana Pawła II w Olsztynie',
        short_name: '5 KM NADZIEI',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#10498A',
        display: 'standalone',
        icon: './static/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@content': './content',
          '@components': './src/components',
          '@layouts': './src/layouts',
          '@constants': './src/constants',
          '@pages': './src/pages',
          '@helpers': './src/helpers',
          '@queries': './src/queries',
          '@images': './src/images',
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.NODE_ENV,
        token,
        overlayDrafts: !isProd,
        watchMode: !isProd && token,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-webpack-size',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [
          'Strict-Transport-Security: max-age=63072000; includeSubDomains; preload',
          "Content-Security-Policy: default-src data: 'unsafe-inline' 'unsafe-eval' https:; script-src data: 'unsafe-inline' 'unsafe-eval' https: blob:; style-src data: 'unsafe-inline' https:; img-src data: https: blob:; font-src data: https:; connect-src https: wss: blob:; media-src https: blob:; object-src https:; child-src https: data: blob:; form-action https:; block-all-mixed-content",
          'X-Frame-Options: DENY',
          'X-Content-Type-Options: nosniff',
          'Referrer-Policy: no-referrer',
          "Feature-Policy: microphone 'none'; geolocation 'none'",
        ],
      },
    },
    'gatsby-plugin-preact',
    'gatsby-plugin-robots-txt',
  ],
  flags: {
    DEV_SSR: false,
  },
};
