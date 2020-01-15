module.exports = {
  siteMetadata: {
    title: `pucci.xyz`,
    description: `Hi, I'm Thomas. I post my thoughts and bookmarks #mobileAppDevelopment #code #management`,
    author: `@Thomas_Pucci`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pucci.xyz`,
        short_name: `pucci`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Slab`,
            variants: [`400`],
          },
          {
            family: `Open Sans`,
            variants: [`300`, `700`],
          },
        ],
      },
    },
  ],
}
