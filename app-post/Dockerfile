# docker build -t thezion/k8s-app-post .

FROM node:12-slim

WORKDIR /app

COPY . .

EXPOSE 5003

CMD [ "node", "index.js" ]
