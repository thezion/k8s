# docker build -t thezion/k8s-app-user .

FROM node:12-slim

WORKDIR /app

COPY . .

EXPOSE 5001

CMD [ "node", "index.js" ]
