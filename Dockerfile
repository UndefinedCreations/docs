FROM oven/bun:canary
WORKDIR /usr/src/app

COPY . .

RUN bun install --verbose

RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "start"]