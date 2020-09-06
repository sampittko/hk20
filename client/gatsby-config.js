const moment = require("moment");

module.exports = {
  siteMetadata: {
    title: `Visma Assistant Admin`,
    description: `Control Center for Visma Assistant.`,
    author: `@sampittko`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyC9jibjI7WjEZ3W3w5KrmjeTPnb0P7674E",
          authDomain: "visma-assistant-ebadf.firebaseapp.com",
          databaseURL: "https://visma-assistant-ebadf.firebaseio.com",
          projectId: "visma-assistant-ebadf",
          storageBucket: "visma-assistant-ebadf.appspot.com",
          messagingSenderId: "196861438027",
          appId: "1:196861438027:web:b1a14f974523cd0f7d85ce",
          measurementId: "G-TSD67EXGYG",
        },
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/img/logo.jpg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
