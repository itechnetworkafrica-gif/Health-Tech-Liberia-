import { Router } from "express";
import Stripe from "stripe";
import { logger } from "../lib/logger";

const router = Router();

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not configured");
  return new Stripe(key);
}

router.post("/donate/payment-intent", async (req, res) => {
  try {
    const { amountCents } = req.body as { amountCents: unknown };

    if (
      typeof amountCents !== "number" ||
      !Number.isInteger(amountCents) ||
      amountCents < 100 // minimum $1.00
    ) {
      res.status(400).json({ error: "Invalid amount. Must be at least $1.00." });
      return;
    }

    const stripe = getStripe();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountCents,
      currency: "usd",
      description: "Donation to Health Tech Liberia",
      metadata: { source: "htl-website-donate-page" },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unexpected error";
    logger.error({ err }, "Failed to create payment intent");
    res.status(500).json({ error: message });
  }
});

export default router;
