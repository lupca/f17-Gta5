FROM node:lts AS development
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install --force
COPY . /app
ENV CI=false
ENV PORT=3000
CMD [ "npm", "start" ]
FROM development AS build
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/.nginx/nginx_ssl.conf /etc/nginx/conf.d/ssl.conf
COPY --from=build /app/.nginx/nginx_api.conf /etc/nginx/conf.d/api.conf

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
