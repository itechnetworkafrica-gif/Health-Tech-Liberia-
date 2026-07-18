import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || process.env.SESSION_SECRET || "";

export interface TokenPayload {
  sub: string;   // userId as string
  name: string;
  email: string;
  role: string;
}

export function signToken(payload: Omit<TokenPayload, never>): string {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, SECRET) as TokenPayload;
  } catch {
    return null;
  }
}

export function getCookie(req: any, name: string): string | undefined {
  const header = req.headers?.cookie || "";
  const match = header.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export function setAuthCookie(res: any, token: string) {
  const maxAge = 7 * 24 * 60 * 60;
  res.setHeader(
    "Set-Cookie",
    `htl_auth=${encodeURIComponent(token)}; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}; Path=/`
  );
}

export function clearAuthCookie(res: any) {
  res.setHeader(
    "Set-Cookie",
    "htl_auth=; HttpOnly; Secure; SameSite=Lax; Max-Age=0; Path=/"
  );
}
