FROM node:22.2.0-alpine

WORKDIR /app

COPY /package.json .

RUN npm install yarn
RUN yarn install --check-files

COPY . .

EXPOSE 8000

CMD [ "yarn", "run", "dev" ]