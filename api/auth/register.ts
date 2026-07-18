import bcrypt from "bcryptjs";
import { getPool } from "../_db";
import { signToken, setAuthCookie } from "../_jwt";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { name, email, password } = req.body || {};

    if (!name || !email || !password) {
      res.status(400).json({ error: "Name, email and password are required" });
      return;
    }
    if (password.length < 8) {
      res.status(400).json({ error: "Password must be at least 8 characters" });
      return;
    }

    const pool = getPool();
    const existing = await pool.query(
      "SELECT id FROM users WHERE email = $1 LIMIT 1",
      [email.toLowerCase()]
    );

    if (existing.rows.length > 0) {
      res.status(409).json({ error: "An account with this email already exists" });
      return;
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const result = await pool.query(
      "INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2, $3, 'user') RETURNING id, name, email, role",
      [name, email.toLowerCase(), passwordHash]
    );
    const user = result.rows[0];

    const token = signToken({
      sub: String(user.id),
      name: user.name,
      email: user.email,
      role: user.role,
    });

    setAuthCookie(res, token);
    res.status(201).json({ user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    console.error("register error", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
