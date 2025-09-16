import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes"; // no ".js" here

async function main() {
  const app = Fastify({ logger: true });

  await app.register(cors, {
    origin: [
      "http://localhost:5173",
      "https://to-do-app-phi-blush.vercel.app",
      /\.vercel\.app$/ // preview deploys
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
  });

  // Simple health here so we know index.ts runs
  app.get("/health", async () => "OK");

  // Register all API routes
  await app.register(routes);

  // Diagnostics: list routes in prod
  app.get("/__routes", () => app.printRoutes());
  app.ready(() => app.log.info("\n" + app.printRoutes()));

  const port = Number(process.env.PORT) || 8080;
  await app.listen({ host: "0.0.0.0", port });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
