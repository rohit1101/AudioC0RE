module.exports = {
  siteMetadata: {
    title: "AudioC0Re",
    siteUrl: "https://audioc0re.io",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "oDOgV3Kcpk-0wAR3AhMmSiKB9juDNJcQoLcOk2FE_H4",
        spaceId: "1lrf2559kdgl",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}
