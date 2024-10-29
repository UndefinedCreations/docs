FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
RUN npm run docs:build

EXPOSE 4173

CMD ["npm", "run", "docs:preview"]