FROM node:18.16.0-alpine3.17

RUN apk add --no-cache bash

WORKDIR /home/node/app


COPY . ./

RUN npm install

RUN npx prisma generate

CMD ["npm", "run", "dev"]

EXPOSE 3000
