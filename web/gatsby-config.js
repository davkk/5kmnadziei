require("dotenv").config();

const isProd = process.env.NODE_ENV === "production";
const token = process.env.SANITY_TOKEN;

module.exports = {
  siteMetadata: {},
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby-Sanity starter",
        short_name: "GS",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#777123",
        display: "standalone",
      },
    },
    "gatsby-plugin-react-helmet-async",
    "gatsby-plugin-emotion",
    "gatsby-plugin-polyfill-io",
    // {
    //   resolve: "gatsby-source-sanity",
    //   options: {
    //     projectId: process.env.SANITY_PROJECT_ID,
    //     dataset: process.env.NODE_ENV,
    //     token,
    //     overlayDrafts: !isProd,
    //     watchMode: !isProd && token,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-prefetch-google-fonts",
    //   options: {
    //     fonts: [],
    //   },
    // },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": "./src/components",
          "@layouts": "./src/layouts",
          "@constants": "./src/constants",
          "@pages": "./src/pages",
          "@helpers": "./src/helpers",
          "@queries": "./src/queries",
          "@styles": "./src/styles",
          "@images": "./src/images",
        },
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        allPageHeaders: [
          "Cookie: SameSite=None; Secure",
          "X-Frame-Options: DENY",
          "X-XSS-Protection: 1; mode=block",
          "cache-control: max-age=31557600, no-cache, no-store, must-revalidate",
        ],
      },
    },
    "gatsby-plugin-preact",
    "gatsby-plugin-next-seo",
    "gatsby-plugin-offline",
    "gatsby-plugin-webpack-size",
  ],
};
