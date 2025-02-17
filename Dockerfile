FROM ubuntu:latest

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENTRYPOINT ["npx", "playwright", "test"]