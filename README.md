<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  SpaceY - Gatsby Ecommerce
</h1>

## 🚀 Preview images

<img src="https://i.ibb.co/HNQ0ysH/spacey1.png" alt="spacey1" width="90%" border="0">
<img src="https://i.ibb.co/vZnJVbV/spacey2.png" alt="spacey2" width="90%" border="0">
<img src="https://i.ibb.co/h89CK3m/spacey3.png" alt="spacey3" width="90%" border="0">

## 🔧 Tech

- Gatsby
- Typescript
- Stripe
- Tailwind CSS
- React Three Fiber
- React Hook Form

## 📍 Live

[spacey.wear](https://spacey.gatsbyjs.io/)

## 📗 Code snippets

```javascript
const attributes = ["size", "type", "name", "gender"];
const genders = ["Men", "Women", "Unisex"];
const sizes = ["XS", "S", "M", "L", "XL"];

const createProductAndSkus = async (
  name,
  gender,
  price,
  attributes,
  metadata,
  sizes,
  type = "good"
) => {
  const product = await stripe.products.create({
    name,
    attributes,
    metadata,
    type,
  });

  if (sizes.length) {
    sizes.forEach(async (size) => {
      await stripe.skus.create({
        attributes: {
          sizes,
          gender,
          type: metadata.type,
          name: `${name} ${size.toUpperCase()}`,
        },
        price,
        currency: "eur",
        inventory: { type: "infinite" },
        product: product.id,
      });
    });
  } else {
    await stripe.skus.create({
      attributes: {
        gender,
        type: metadata.type,
        name,
      },
      price,
      currency: "eur",
      inventory: { type: "infinite" },
      product: product.id,
    });
  }
};

const addImageToProduct = async (id, image) => {
  const product = await stripe.products.retrieve(id);
  const updatedProduct = await stripe.products.update(id, {
    images: [...product.images, image],
  });
  return updatedProduct;
};
```
