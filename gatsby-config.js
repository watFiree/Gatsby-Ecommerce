const path = require("path");
require("dotenv").config();

const secretKey = process.env.STRIPE_SECRET_KEY;

module.exports = {
  siteMetadata: {
    title: "SpaceY Shop",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        pages: path.join(__dirname, "src/pages"),
        images: path.join(__dirname, "src/images"),
        templates: path.join(__dirname, "src/templates"),
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Product", "Sku"],
        secretKey,
        downloadFiles: true,
      },
    },
    `gatsby-plugin-tsconfig-paths`,
  ],
};
