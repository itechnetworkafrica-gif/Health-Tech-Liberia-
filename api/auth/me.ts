import { getCookie, verifyToken } from "../_jwt";
import { getPool } from "../_db";

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const token = getCookie(req, "htl_auth");
    if (!token) {
      res.status(401).json({ error: "Not authenticated" });
      return;
    }

    const payload = verifyToken(token);
    if (!payload) {
      res.status(401).json({ error: "Not authenticated" });
      return;
    }

    const pool = getPool();
    const result = await pool.query(
      "SELECT id, name, email, role FROM users WHERE id = $1 LIMIT 1",
      [Number(payload.sub)]
    );

    if (!result.rows[0]) {
      res.status(401).json({ error: "Not authenticated" });
      return;
    }

    const user = result.rows[0];
    res.json({ user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    console.error("me error", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
