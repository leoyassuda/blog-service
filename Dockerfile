FROM node:16-alpine AS builder

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
ARG PORT
ENV PORT=${PORT}

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/

RUN npm install\
    && npm install typescript -g\
    && npm install ts-node

COPY . .

RUN npm run build

FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]