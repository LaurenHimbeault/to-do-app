import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });

await app.register(cors, {
  // allow localhost dev and your Vercel site (and any preview *.vercel.app)
  origin: [
    "http://localhost:5173",
    "http://localhost:8080",
    "https://to-do-app-phi-blush.vercel.app",
    /\.vercel\.app$/ // allows preview URLs like https://<hash>-yourapp.vercel.app
  ],
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: false
});
