#Primera Etapa
FROM registry.access.redhat.com/ubi8/nodejs-14:latest
USER root
RUN mkdir -p /app

WORKDIR /app

COPY package.json /app


RUN npm install

COPY . /app

RUN npm run build --prod

#Segunda Etapa
FROM registry.access.redhat.com/ubi8/nginx-120:latest
COPY --from=build-step /app/dist /usr/share/nginx/html

#Alternativa NodeJs server
#WORKDIR /app

#COPY ./deployment .
# EXPOSE 8080

#CMD ["node", "server.js"]