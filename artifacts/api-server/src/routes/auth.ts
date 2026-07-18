import { Router } from "express";
import bcrypt from "bcryptjs";
import { db } from "@workspace/db";
import { usersTable } from "@workspace/db/schema";
import { eq } from "drizzle-orm";

const router = Router();

// POST /api/auth/register
router.post("/auth/register", async (req, res) => {
  try {
    const { name, email, password } = req.body as {
      name?: string;
      email?: string;
      password?: string;
    };

    if (!name || !email || !password) {
      res.status(400).json({ error: "Name, email and password are required" });
      return;
    }

    if (password.length < 8) {
      res.status(400).json({ error: "Password must be at least 8 characters" });
      return;
    }

    const existing = await db
      .select({ id: usersTable.id })
      .from(usersTable)
      .where(eq(usersTable.email, email.toLowerCase()))
      .limit(1);

    if (existing.length > 0) {
      res.status(409).json({ error: "An account with this email already exists" });
      return;
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const [user] = await db
      .insert(usersTable)
      .values({ name, email: email.toLowerCase(), passwordHash, role: "user" })
      .returning({
        id: usersTable.id,
        name: usersTable.name,
        email: usersTable.email,
        role: usersTable.role,
      });

    req.session.userId = user.id;
    req.session.role = user.role;

    res.status(201).json({ user });
  } catch (err) {
    console.error("register error", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /api/auth/login
router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email.toLowerCase()))
      .limit(1);

    if (!user) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    req.session.userId = user.id;
    req.session.role = user.role;

    res.json({
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    console.error("login error", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/auth/me
router.get("/auth/me", async (req, res) => {
  try {
    if (!req.session.userId) {
      res.status(401).json({ error: "Not authenticated" });
      return;
    }

    const [user] = await db
      .select({
        id: usersTable.id,
        name: usersTable.name,
        email: usersTable.email,
        role: usersTable.role,
      })
      .from(usersTable)
      .where(eq(usersTable.id, req.session.userId))
      .limit(1);

    if (!user) {
      req.session.destroy(() => {});
      res.status(401).json({ error: "Not authenticated" });
      return;
    }

    res.json({ user });
  } catch (err) {
    console.error("me error", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /api/auth/logout
router.post("/auth/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

export default router;
