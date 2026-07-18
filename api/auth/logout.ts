import { clearAuthCookie } from "../_jwt";

export default function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  clearAuthCookie(res);
  res.json({ success: true });
}
