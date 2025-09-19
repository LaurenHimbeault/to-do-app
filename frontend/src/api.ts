// api.ts
const rawBase = import.meta.env.VITE_API_BASE;
if (!rawBase) throw new Error("VITE_API_BASE is not defined");

// strip any trailing slashes
const API_BASE = rawBase.replace(/\/+$/, "");

async function handle(res: Response) {
  // throw helpful errors if not ok
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API ${res.status} ${res.statusText} — ${text}`);
  }
  // some endpoints (DELETE 204) have no body
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("application/json")) return null;
  return res.json();
}

export async function getTodos() {
  const r = await fetch(`${API_BASE}/todos`);
  const data = await handle(r);
  if (!Array.isArray(data)) throw new Error("Expected array from /todos");
  return data;
}

export async function addTodo(title: string) {
  const r = await fetch(`${API_BASE}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });
  return handle(r);
}

export async function toggleTodo(id: number, done: boolean) {
  const r = await fetch(`${API_BASE}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done })
  });
  return handle(r);
}

export async function deleteTodo(id: number) {
  const r = await fetch(`${API_BASE}/todos/${id}`, { method: "DELETE" });
  await handle(r); // will be null for 204, that’s fine
}
