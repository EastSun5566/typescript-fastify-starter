# base stage
FROM node:16-slim as base

ENV TINI_VERSION=v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

RUN mkdir /app && chown -R node:node /app
WORKDIR /app

USER node

# RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
RUN npm install -g pnpm

COPY --chown=node:node package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
COPY --chown=node:node . .

EXPOSE 8080

# dev stage
FROM base as dev

CMD ["pnpm", "start:dev"]

# prod stage
FROM source as prod

ENV NODE_ENV=production
RUN pnpm build

ENTRYPOINT ["/tini", "--"]
CMD ["node", "dist"]