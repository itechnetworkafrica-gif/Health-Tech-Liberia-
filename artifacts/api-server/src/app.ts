import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import { join } from "node:path";
import { existsSync } from "node:fs";
import { pool } from "@workspace/db";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();
const PgSession = connectPgSimple(session);

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET environment variable is required");
}

app.use(
  session({
    store: new PgSession({
      pool,
      tableName: "sessions",
      createTableIfMissing: true,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      sameSite: "lax",
    },
  }),
);

// In production: serve the built React frontend static assets
const frontendDist = join(process.cwd(), "artifacts/htl-website/dist/public");
if (process.env.NODE_ENV === "production" && existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
}

app.use("/api", router);

// In production: SPA catch-all — any non-API route returns index.html
if (process.env.NODE_ENV === "production" && existsSync(frontendDist)) {
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(join(frontendDist, "index.html"));
  });
}

export default app;
