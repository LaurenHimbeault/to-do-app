# --- Build stage ---
FROM node:20-bookworm AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# generate Prisma client during build (uses devDeps)
RUN npx prisma generate
RUN npm run build

# --- Runtime stage ---
FROM node:20-bookworm
ENV NODE_ENV=production
ENV PORT=8080
WORKDIR /app
# Reuse the built node_modules that already contains the generated client
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
EXPOSE 8080
CMD ["node", "dist/index.js"]
