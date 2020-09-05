const moment = require("moment");

module.exports = {
  siteMetadata: {
    title: `Visma Assistant Admin`,
    description: `Control Center for Visma Assistant.`,
    author: `@sampittko`,
    defaultUser: {
      name: 'admin',
      password: 'admin'
    }
  },
  plugins: [
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
