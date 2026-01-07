const BASE = import.meta.env.VITE_BACKEND_BASE_URL;

export async function exchangeCode(code: string) {
  const res = await fetch(`${BASE}/auth/callback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code })
  });
  if (!res.ok) throw new Error("Token exchange failed");
  return res.json();
}

export async function getMe(token: string) {
  const res = await fetch(`${BASE}/me`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error("Unauthorized");
  return res.json();
}
