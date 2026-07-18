import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import bcrypt from "bcryptjs";
import { usersTable } from "./schema/index.js";
import { eq } from "drizzle-orm";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set");
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

const ADMIN_EMAIL = "admin@healthtechliberia.org";
const ADMIN_NAME = "Admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD!;

if (!ADMIN_PASSWORD) {
  throw new Error("ADMIN_PASSWORD env var required");
}

const existing = await db
  .select({ id: usersTable.id })
  .from(usersTable)
  .where(eq(usersTable.email, ADMIN_EMAIL))
  .limit(1);

if (existing.length > 0) {
  console.log("Admin account already exists, updating password...");
  const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);
  await db
    .update(usersTable)
    .set({ passwordHash, role: "admin" })
    .where(eq(usersTable.email, ADMIN_EMAIL));
  console.log("✓ Admin password updated");
} else {
  const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);
  await db.insert(usersTable).values({
    name: ADMIN_NAME,
    email: ADMIN_EMAIL,
    passwordHash,
    role: "admin",
  });
  console.log("✓ Admin account created: admin@healthtechliberia.org");
}

await pool.end();
