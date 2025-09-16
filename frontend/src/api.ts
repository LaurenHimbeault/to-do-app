const API_BASE = import.meta.env.VITE_API_BASE ?? "http://localhost:8080";
export async function getTodos() {
  const r = await fetch(`${API_BASE}/todos`);
  return r.json();
}
export async function addTodo(title: string) {
  const r = await fetch(`${API_BASE}/todos`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title }) });
  return r.json();
}
export async function toggleTodo(id: number, done: boolean) {
  const r = await fetch(`${API_BASE}/todos/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ done }) });
  return r.json();
}
export async function deleteTodo(id: number) {
  await fetch(`${API_BASE}/todos/${id}`, { method: "DELETE" });
}
