import React, { useState, useEffect, useRef } from "react";
import useCart from "hooks/useCart";
import useCheckout from "hooks/useCheckout";

import CartPreview from "components/CartPreview";

const CartButton: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cart = useRef<HTMLDivElement>(null);
  useEffect(() => {
    cart.current?.addEventListener("mouseover", () => setIsHovering(true));
    cart.current?.addEventListener("mouseleave", () => setIsHovering(false));
  }, []);

  const { items } = useCart();
  const [redirectToCheckout] = useCheckout();
  return (
    <>
      <div
        className={`absolute top-8 right-12 ${
          isHovering &&
          "border-t-2 border-l-2 border-r-2 border-gray-100 top-6 right-10"
        } `}
        ref={cart}
      >
        <span
          onClick={items.length ? redirectToCheckout : () => {}}
          className="cursor-pointer"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 32.5C14.4577 33.0298 18.6076 35.0438 21.7819 38.2181C24.9562 41.3924 26.9702 45.5423 27.5 50C29.7098 48.726 31.5582 46.9096 32.8706 44.7223C34.1829 42.5351 34.9158 40.0493 35 37.5C39.1978 36.0233 42.8634 33.335 45.5334 29.775C48.2033 26.2151 49.7577 21.9433 50 17.5C50 15.5109 49.2098 13.6032 47.8033 12.1967C46.3968 10.7902 44.4891 10 42.5 10C38.0567 10.2423 33.7849 11.7967 30.225 14.4666C26.665 17.1366 23.9767 20.8022 22.5 25C19.9507 25.0842 17.4649 25.8171 15.2777 27.1294C13.0904 28.4418 11.274 30.2902 10 32.5"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 35C14.8981 36.4689 12.7941 38.6815 11.4579 41.3539C10.1216 44.0264 9.61397 47.0371 9.99998 50C12.9629 50.386 15.9735 49.8784 18.646 48.5421C21.3185 47.2059 23.5311 45.1019 25 42.5"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M37.5 25C38.8807 25 40 23.8807 40 22.5C40 21.1193 38.8807 20 37.5 20C36.1193 20 35 21.1193 35 22.5C35 23.8807 36.1193 25 37.5 25Z"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {items.length > 0 ? (
            <div className="absolute top-8 right-2 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
              <p className="text-white font-medium ">
                {items.reduce((acc, cur) => acc + cur.quantity, 0)}
              </p>
            </div>
          ) : null}
        </span>
        {isHovering ? <CartPreview /> : null}
      </div>
    </>
  );
};

export default CartButton;
