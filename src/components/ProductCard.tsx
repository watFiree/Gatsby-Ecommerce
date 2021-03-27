import React from "react";
import { navigate } from "gatsby";

import Text from "components/Text";

const ProductCard: React.FC<{
  id: string;
  image: string;
  name: string;
  price: number;
  currency: string;
}> = ({ id, image, name, price, currency }) => {
  return (
    <div
      className="w-52 h-72 flex items-center flex-col cursor-pointer hover:opacity-90"
      onClick={() => navigate("/" + id)}
    >
      <img className="h-3/4 w-full" src={image} />
      <div className="h-1/4 w-full bg-blue-500 flex items-center justify-center flex-col">
        <Text>
          <p className="text-black">{name.toUpperCase()}</p>
        </Text>
        <Text>
          {price / 100} {currency.toUpperCase()}
        </Text>
      </div>
    </div>
  );
};

export default ProductCard;
