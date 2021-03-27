import { loadStripe } from "@stripe/stripe-js";

const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY || "";

const getStripe = async () => {
  const stripe = await loadStripe(publishableKey);
  return stripe;
};

export default getStripe;
