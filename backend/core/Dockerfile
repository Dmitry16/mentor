FROM node

WORKDIR /app

COPY package.json ./

RUN npm install && npm install -g nodemon

COPY src /app/src

CMD npm start

EXPOSE 3003