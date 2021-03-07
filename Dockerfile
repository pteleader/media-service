FROM node:14-slim

WORKDIR /usr/src/app
COPY . .

RUN npm ci --only=production

EXPOSE 3000

CMD [ "node", "src/server.js" ]