import { useState } from "react";
import getStripe from "stripejs";

import useCart from "hooks/useCart";

const useCheckout = () => {
  const [loading, setLoading] = useState(false);
  const { items } = useCart();

  const redirectToCheckout = async () => {
    setLoading(true);

    const stripe = await getStripe();
    if (!stripe) return alert("Error with payment provider");

    const redirect = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: items.map((item) => ({
        price: item.id,
        quantity: item.quantity,
      })),
      shippingAddressCollection: {
        allowedCountries: ["PL", "GB", "CZ", "DE", "FR", "ES"],
      },
      successUrl: `${window.location.origin}/success/`,
      cancelUrl: `${window.location.origin}/404/`,
    });

    if (redirect.error) {
      console.log(redirect.error);
    }

    return true;
  };

  return [redirectToCheckout, loading] as const;
};

export default useCheckout;
