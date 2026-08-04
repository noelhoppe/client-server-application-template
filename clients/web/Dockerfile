ARG NODEJS_BUILDER_IMAGE=node:24.18.0-alpine3.23
ARG NODEJS_RUNTIME_IMAGE=gcr.io/distroless/nodejs24-debian13:nonroot
FROM ${NODEJS_BUILDER_IMAGE} AS dependencies
WORKDIR /app/clients
COPY package*.json ./
COPY web/package*.json ./web/
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund



FROM ${NODEJS_BUILDER_IMAGE} AS builder
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app/clients
COPY --from=dependencies /app/clients/node_modules ./node_modules
COPY --from=dependencies /app/clients/web/node_modules ./web/node_modules
COPY package*.json ./
COPY web/package*.json ./web/
COPY web ./web
RUN npm run web:build



FROM ${NODEJS_RUNTIME_IMAGE}
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000
WORKDIR /app/clients/web
USER nonroot:nonroot
EXPOSE 3000
COPY --from=builder --chown=nonroot:nonroot /app/clients/web/.next/standalone ./standalone
COPY --from=builder --chown=nonroot:nonroot /app/clients/web/public ./standalone/web/public
COPY --from=builder --chown=nonroot:nonroot /app/clients/web/.next/static ./standalone/web/.next/static
ENTRYPOINT ["/nodejs/bin/node", "./standalone/web/server.js"]
