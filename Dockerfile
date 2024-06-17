FROM node:20

WORKDIR /src

ENV NODE_ENV=development

COPY package.json /src/package.json

RUN npm install

COPY . /src

CMD ["npm", "start"]