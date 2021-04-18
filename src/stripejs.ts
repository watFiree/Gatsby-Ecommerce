import { loadStripe } from "@stripe/stripe-js";

const publishableKey = process.env.GATSBY_STRIPE_PUBLISHABLE_KEY;

const getStripe = async () => {
  if (!publishableKey) throw new Error("No publishable key");
  const stripe = await loadStripe(publishableKey);
  return stripe;
};

export default getStripe;
