import { useEffect, useState } from "react";
import { getTodos, addTodo, toggleTodo, deleteTodo } from "./api";

type Todo = { id: number; title: string; done: boolean };

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  async function refresh() {
    setTodos(await getTodos());
  }

  useEffect(() => { refresh(); }, []);

  async function onAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    await addTodo(title.trim());
    setTitle("");
    refresh();
  }

  return (
    <main style={{ maxWidth: 560, margin: "2rem auto", fontFamily: "system-ui" }}>
      <h1>Todos</h1>
      <form onSubmit={onAdd} style={{ display: "flex", gap: 8 }}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Add a task..." style={{ flex: 1, padding: 8 }} />
        <button>Add</button>
      </form>
      <ul style={{ padding: 0, listStyle: "none", marginTop: 16 }}>
        {todos.map(t => (
          <li key={t.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
            <input type="checkbox" checked={t.done} onChange={() => toggleTodo(t.id, !t.done).then(refresh)} />
            <span style={{ textDecoration: t.done ? "line-through" : "none" }}>{t.title}</span>
            <button style={{ marginLeft: "auto" }} onClick={() => deleteTodo(t.id).then(refresh)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
