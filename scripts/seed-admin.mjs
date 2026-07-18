import pg from "pg";
import bcrypt from "bcryptjs";

const { Pool } = pg;

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
if (!process.env.ADMIN_PASSWORD) throw new Error("ADMIN_PASSWORD required");

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const ADMIN_EMAIL = "admin@healthtechliberia.org";
const ADMIN_NAME = "Admin";
const passwordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12);

const existing = await pool.query(
  "SELECT id FROM users WHERE email = $1 LIMIT 1",
  [ADMIN_EMAIL]
);

if (existing.rows.length > 0) {
  await pool.query(
    "UPDATE users SET password_hash = $1, role = 'admin' WHERE email = $2",
    [passwordHash, ADMIN_EMAIL]
  );
  console.log("✓ Admin password updated");
} else {
  await pool.query(
    "INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2, $3, 'admin')",
    [ADMIN_NAME, ADMIN_EMAIL, passwordHash]
  );
  console.log("✓ Admin account created: admin@healthtechliberia.org");
}

await pool.end();
