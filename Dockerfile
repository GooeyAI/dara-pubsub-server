FROM node:16-buster

COPY yarn.lock package.json ./
RUN yarn

COPY . .

EXPOSE 9001
CMD node src/index.js
