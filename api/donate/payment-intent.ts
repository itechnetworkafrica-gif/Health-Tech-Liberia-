import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: "Stripe is not configured on this server." });
  }

  const { amountCents } = req.body as { amountCents: unknown };

  if (
    typeof amountCents !== "number" ||
    !Number.isInteger(amountCents) ||
    amountCents < 100
  ) {
    return res.status(400).json({ error: "Invalid amount. Minimum donation is $1.00." });
  }

  const stripe = new Stripe(secretKey);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amountCents,
    currency: "usd",
    description: "Donation to Health Tech Liberia",
    metadata: { source: "htl-website-vercel" },
  });

  return res.status(200).json({ clientSecret: paymentIntent.client_secret });
}
