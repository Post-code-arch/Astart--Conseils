// Session admin : cookie signé HMAC-SHA256, compatible edge (middleware) et node.
// Le secret de signature est le mot de passe admin lui-même (une seule variable
// d'env à gérer : ADMIN_PASSWORD). Changer le mot de passe invalide les sessions.

export const SESSION_COOKIE = "admin_session";
const THIRTY_DAYS = 60 * 60 * 24 * 30;

function b64url(bytes: Uint8Array): string {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmac(message: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return b64url(new Uint8Array(sig));
}

/** Crée un jeton `exp.signature` valable 30 jours. */
export async function createSession(secret: string): Promise<{ value: string; maxAge: number }> {
  const exp = Math.floor(Date.now() / 1000) + THIRTY_DAYS;
  const sig = await hmac(String(exp), secret);
  return { value: `${exp}.${sig}`, maxAge: THIRTY_DAYS };
}

/** Vérifie signature + expiration. `secret` = ADMIN_PASSWORD courant. */
export async function verifySession(token: string | undefined, secret: string | undefined): Promise<boolean> {
  if (!token || !secret) return false;
  const [expStr, sig] = token.split(".");
  if (!expStr || !sig) return false;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || exp < Math.floor(Date.now() / 1000)) return false;
  const expected = await hmac(expStr, secret);
  // comparaison à temps constant
  if (expected.length !== sig.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  return diff === 0;
}
