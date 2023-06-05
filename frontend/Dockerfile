FROM node:19-alpine
WORKDIR /usr/src/app
COPY package*.json /usr/src/app
RUN npm ci
COPY . /usr/src/app/
EXPOSE 3000
CMD ["npm", "run", "dev"]