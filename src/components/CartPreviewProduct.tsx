import React from "react";
import { navigate } from "gatsby";
import { CartItem } from "types";
import useCart from "hooks/useCart";

const CartPreviewProduct: React.FC<{ data: CartItem; isLast: boolean }> = ({
  data,
  isLast,
}) => {
  const { removeItem } = useCart();
  return (
    <div
      className={`w-full flex justify-between h-16 items-center ${
        !isLast ? "border-b" : ""
      }`}
    >
      <button onClick={() => removeItem(data.id)} className="text-xl px-2">
        🗙
      </button>
      <div className="flex h-4/5 w-4/5">
        <img src={data.images[0]} className="h-full" />
        <div className="flex flex-col">
          <p
            className="hover:underline cursor-pointer"
            onClick={() => navigate("/" + data.productId)}
          >
            {data.name} x<span className="font-bold">{data.quantity}</span>
          </p>
          <p>
            Size: <span className="font-bold">{data.size}</span>
          </p>
        </div>
      </div>
      <p className="w-1/3 font-medium">
        {(data.price * data.quantity) / 100} {data.currency.toUpperCase()}
      </p>
    </div>
  );
};

export default CartPreviewProduct;
