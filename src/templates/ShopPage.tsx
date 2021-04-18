import React from "react";
import { graphql } from "gatsby";
import { ShopPageProps as Data } from "types";

import Layout from "components/Layout";
import SEO from "components/SEO";
import SideNavigation from "components/SideNavigation";
import CartButton from "components/Cart";
import ProductCard from "components/ProductCard";

const ShopPage: React.FC<{ data: Data }> = ({ data }) => {
  const { products, skus } = data;
  return (
    <Layout>
      <SEO />
      <CartButton />
      <SideNavigation />
      <main className="pt-16 px-12 h-screen w-4/5 grid grid-flow-row grid-cols-4 grid-rows-auto">
        {products.nodes.map((product) => {
          const sku = skus.nodes.find((item) => item.product.id === product.id);
          return (
            <ProductCard
              id={product.id}
              image={product.images[0] || ""}
              name={product.name}
              price={sku?.price || 0}
              currency={sku?.currency || ""}
            />
          );
        })}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getData($type: String!) {
    products: allStripeProduct(filter: { metadata: { type: { eq: $type } } }) {
      nodes {
        id
        name
        images
        active
      }
    }
    skus: allStripeSku(filter: { attributes: { type: { eq: $type } } }) {
      nodes {
        price
        currency
        attributes {
          type
          size
        }
        product {
          id
        }
      }
    }
  }
`;

export default ShopPage;
