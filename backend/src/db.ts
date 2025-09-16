import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// Optional: log connection error early
prisma.$connect().catch((e) => {
  console.error("Prisma connect error:", e);
  process.exit(1);
});
