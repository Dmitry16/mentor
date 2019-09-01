FROM node

WORKDIR /app

COPY src /app/src

COPY package.json ./

RUN npm install && npm install -g nodemon

CMD npm start

EXPOSE 3003