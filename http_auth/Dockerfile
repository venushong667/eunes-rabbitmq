FROM node:12

RUN mkdir /app
ADD . /app
COPY package.json /app
WORKDIR /app

RUN npm install

ENV NODE_ENV=prod

CMD [ "node", "index.js" ]