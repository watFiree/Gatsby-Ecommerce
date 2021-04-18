import React from "react";
import { graphql } from "gatsby";
import { useForm } from "react-hook-form";
import useCart from "hooks/useCart";
import { ProductPageProps as Data, CartItem } from "types";

import Layout from "components/Layout";
import SideNavigation from "components/SideNavigation";
import Cart from "components/Cart";
import ImagesSlider from "components/ImagesSider";

const ProductPage: React.FC<{ data: Data }> = ({ data }) => {
  const { register, handleSubmit, errors } = useForm();
  const { addItem } = useCart();
  const onSubmit = (data: { size: string | undefined }) => {
    if (!data.size) return alert("This size is not available");
    const item = JSON.parse(data.size) as CartItem;
    return addItem(item);
  };
  const includesSize = data.product.attributes.includes("size");

  console.log(data.skus.nodes[0].attributes);

  return (
    <Layout>
      <SideNavigation bgColor={true} />
      <Cart />
      <main className="flex items-center justify-between w-4/5 pl-4 pr-24 ">
        <div className="w-3/5 h-screen flex items-center justify-center">
          <ImagesSlider
            productName={data.product.name}
            images={data.product.images}
          />
        </div>

        <div className="w-2/5 h-screen flex flex-col items-center justify-center">
          <h2 className="text-gray-50 text-4xl font-medium">
            {data.product.name.toUpperCase()}
          </h2>

          <h3 className="text-blue-500 text-3xl font-medium py-8">
            {data.skus.nodes[0].price / 100}
            {" " + data.skus.nodes[0].currency.toUpperCase()}
          </h3>

          <p className="w-3/4 text-gray-50 text-xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vel dictum velit. Sed vulputate posuere arcu, ut congue orci. Nunc
            sollicitudin mollis mauris, et tincidunt magna volutpat vitae. Morbi
            quis finibus nunc. Fusce vehicula massa ac massa lobortis sodales.
            Nunc cursus augue at porta tincidunt. Curabitur eu placerat lectus.
            Vestibulum iaculis ipsum a neque vulputate, vel sodales nulla
            consequat. Proin commodo fermentum fringilla. Integer lacus nulla,
            imperdiet in condimentum ac, dictum at arcu. Sed dui felis,
            malesuada vitae est id, cursus consectetur nulla. Proin vel luctus
            lectus. Morbi vitae tellus ex.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="pt-12 w-3/4 flex items-center justify-evenly"
          >
            {includesSize ? (
              <select
                name="size"
                ref={register({
                  required: true,
                })}
                className="w-28 h-12 bg-blue-500 text-black font-medium uppercase pointer px-6 rounded-lg"
              >
                <option value="">Size</option>
                {["XS", "S", "M", "L", "XL"].map((size) => {
                  const skuSized = data.skus.nodes.find(
                    (sku) => sku.attributes.size === size
                  );
                  console.log(data.product.name);
                  const itemValue = skuSized
                    ? {
                        id: skuSized?.id,
                        name: data.product.name,
                        images: data.product.images,
                        quantity: 1,
                        price: skuSized?.price,
                        currency: skuSized?.currency,
                        size,
                        productId: data.product.id,
                      }
                    : undefined;

                  return (
                    <option
                      value={itemValue ? JSON.stringify(itemValue) : itemValue}
                      disabled={!skuSized}
                    >
                      {size}
                    </option>
                  );
                })}
              </select>
            ) : null}
            {includesSize && errors.size && errors.size.type === "required"
              ? alert("Size is required")
              : null}
            <button
              name="button"
              ref={register}
              type="submit"
              className="w-42 h-12 bg-blue-500 text-black font-medium uppercase pointer px-6 rounded-lg"
            >
              add to cart
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getProductData($id: String!) {
    product: stripeProduct(id: { eq: $id }) {
      id
      images
      active
      attributes
      name
    }
    skus: allStripeSku(filter: { product: { id: { eq: $id } } }) {
      nodes {
        id
        active
        attributes {
          size
          type
        }
        currency
        price
      }
    }
  }
`;

export default ProductPage;
