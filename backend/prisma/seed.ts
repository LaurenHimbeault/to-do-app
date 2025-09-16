import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const count = await prisma.todo.count();
  if (count === 0) {
    await prisma.todo.createMany({
      data: [
        { title: "Learn Fastify" },
        { title: "Wire up Prisma" },
        { title: "Ship to Cloud Run" }
      ]
    });
  }
  console.log("Seeded (or already had) todos.");
}
main().finally(() => prisma.$disconnect());
