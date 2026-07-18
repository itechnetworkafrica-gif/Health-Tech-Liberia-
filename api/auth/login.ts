import bcrypt from "bcryptjs";
import { getPool } from "../_db";
import { signToken, setAuthCookie } from "../_jwt";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    const pool = getPool();
    const result = await pool.query(
      "SELECT id, name, email, password_hash, role FROM users WHERE email = $1 LIMIT 1",
      [email.toLowerCase()]
    );

    const user = result.rows[0];
    if (!user) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    const token = signToken({
      sub: String(user.id),
      name: user.name,
      email: user.email,
      role: user.role,
    });

    setAuthCookie(res, token);
    res.json({ user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    console.error("login error", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
