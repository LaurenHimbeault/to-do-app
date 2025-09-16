import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes.js";

const app = Fastify({ logger: true });

app.register(cors, { origin: "*" });
app.register(routes);

const port = Number(process.env.PORT) || 8080;
app.listen({ host: "0.0.0.0", port }).catch((err) => {
  app.log.error(err);
  process.exit(1);
});
