FROM node:lts AS development
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN yarn
COPY . /app
ENV CI=false
ENV PORT=3000
CMD [ "yarn", "start" ]
FROM development AS build
RUN yarn build
FROM nginx:alpine
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/.nginx/nginx_ssl.conf /etc/nginx/conf.d/ssl.conf

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
