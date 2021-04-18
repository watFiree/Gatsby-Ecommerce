import React from "react";
import { graphql } from "gatsby";
import { NewestPageProps as Data } from "types";

import Layout from "components/Layout";
import SEO from "components/SEO";
import SideNavigation from "components/SideNavigation";
import Cart from "components/Cart";
import ProductCard from "components/ProductCard";

const newest: React.FC<{ data: Data }> = ({ data }) => {
  const { products, skus } = data;
  return (
    <Layout>
      <SEO />
      <SideNavigation />
      <Cart />
      <main className="pt-16 px-12 h-screen w-4/5 grid grid-flow-row grid-cols-4 grid-rows-auto">
        {products.nodes.map((product) => {
          const productSku = skus.nodes.find(
            (sku) => sku.product.id === product.id
          );
          if (productSku) {
            return (
              <ProductCard
                id={product.id}
                image={product.images[0]}
                name={product.name}
                price={productSku.price}
                currency={productSku.currency}
              />
            );
          }
          return null;
        })}
      </main>
    </Layout>
  );
};

export default newest;

export const query = graphql`
  query getNewestProducts {
    products: allStripeProduct(
      sort: { fields: created, order: DESC }
      limit: 10
    ) {
      nodes {
        id
        images
        name
        active
      }
    }
    skus: allStripeSku {
      nodes {
        product {
          id
        }
        currency
        price
      }
    }
  }
`;
