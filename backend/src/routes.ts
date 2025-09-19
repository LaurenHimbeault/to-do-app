import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "./db"; // no ".js"

export async function routes(app: FastifyInstance) {
  // landing (optional)
  app.get("/", async () => `
    <h1>Todo API</h1>
    <ul>
      <li><a href="/health">/health</a></li>
      <li><a href="/todos">/todos</a> (GET, POST, PATCH/PUT, DELETE)</li>
      <li><a href="/__routes">/__routes</a> (diagnostics)</li>
    </ul>
  `);

  app.get("/todos", async () =>
    prisma.todo.findMany({ orderBy: { createdAt: "desc" } })
  );

  app.post("/todos", async (req, reply) => {
    const body = z.object({ title: z.string().min(1) }).parse(req.body);
    const todo = await prisma.todo.create({ data: { title: body.title } });
    reply.code(201);
    return todo;
  });

  // Support both PATCH and PUT
  app.patch("/todos/:id", async (req) => {
    const params = z.object({ id: z.coerce.number() }).parse(req.params);
    const body = z.object({
      title: z.string().optional(),
      done: z.boolean().optional()
    }).parse(req.body);
    return prisma.todo.update({ where: { id: params.id }, data: body });
  });

  app.put("/todos/:id", async (req) => {
    const params = z.object({ id: z.coerce.number() }).parse(req.params);
    const body = z.object({
      title: z.string().optional(),
      done: z.boolean().optional()
    }).parse(req.body);
    return prisma.todo.update({ where: { id: params.id }, data: body });
  });

  app.delete("/todos/:id", async (req, reply) => {
    const params = z.object({ id: z.coerce.number() }).parse(req.params);
    await prisma.todo.delete({ where: { id: params.id } });
    reply.code(204);
    return null;
  });
}
