module.exports = {
  siteMetadata: {
    title: "The Bionicle Archives",
    description: "",
    author: "Sojke Caluwé",
    siteUrl: "http://bionicle-archive.local/",
  },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
        resolve: "gatsby-source-wordpress",
        options: {
          url: "http://bionicle-archive.local/graphql",
        },
      },
    ],
  };