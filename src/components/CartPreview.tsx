import React from "react";
import useCart from "hooks/useCart";
import useCheckout from "hooks/useCheckout";

import ProductCard from "components/CartPreviewProduct";

const CartPreview = () => {
  const { items } = useCart();
  const [redirectToCheckout] = useCheckout();
  return (
    <div className="absolute right-0 bg-gray-800 w-96 py-2 px-4 flex flex-col text-gray-50">
      <h2 className="text-xl font-medium">Your Cart</h2>
      <div className="w-100 min-h-16 max-h-48 border-gray-300 border-t-2 border-b-2 my-2 overflow-y-auto">
        {items.length > 0 ? (
          items.map((item, index, array) => (
            <ProductCard data={item} isLast={index === array.length - 1} />
          ))
        ) : (
          <p className="py-6">Your cart is empty.</p>
        )}
      </div>
      {items.length > 0 ? (
        <div className="w-full flex justify-between text-lg font-medium py-3">
          <p>Price:</p>{" "}
          <p className="text-blue-500">
            {items?.reduce((acc, cur) => acc + cur.price * cur.quantity, 0) /
              100}

            {items[0].currency.toUpperCase()}
          </p>
        </div>
      ) : null}

      <button
        className="w-4/5 h-12 self-center bg-blue-500 text-black font-medium tracking-wide"
        onClick={redirectToCheckout}
        disabled={!items.length}
      >
        {"Checkout".toUpperCase()}
      </button>
    </div>
  );
};

export default CartPreview;
