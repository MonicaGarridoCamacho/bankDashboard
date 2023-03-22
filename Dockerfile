#Primera Etapa
FROM node:14-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod


#Segunda Etapa
FROM nginx:1.17.1-alpine
USER nginx
RUN  touch /var/run/nginx.pid && \
     chown -R nginx:nginx /var/cache/nginx /var/run/nginx.pid
USER nginx
COPY --chown=nginx:nginx /app/dist /usr/share/nginx/html
#Si estas utilizando otra aplicacion cambia PokeApp por el nombre de tu app
COPY --from=build-step /app/dist /usr/share/nginx/html