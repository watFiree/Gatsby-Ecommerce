exports.createPages = async ({ graphql, actions }) => {
  // create page for each catergory
  const ShopTemplate = require.resolve("./src/templates/ShopPage.tsx");
  const categories = ["t-shirt", "hoodie", "gadget"];

  categories.forEach((category) => {
    actions.createPage({
      path: category + "s",
      component: ShopTemplate,
      context: {
        type: category,
      },
    });
  });

  // end

  //create page for each product
  const ProductTemplate = require.resolve("./src/templates/ProductPage.tsx");
  const result = await graphql(`
    query {
      allStripeProduct {
        nodes {
          id
        }
      }
    }
  `);

  const products = result.data.allStripeProduct.nodes;

  products.forEach((product) => {
    actions.createPage({
      path: "/" + product.id,
      component: ProductTemplate,
      context: {
        id: product.id,
      },
    });
  });
  //end
};
