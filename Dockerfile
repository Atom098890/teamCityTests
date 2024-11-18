FROM ubuntu:latest

ENTRYPOINT ["npx", "playwright", "test"]