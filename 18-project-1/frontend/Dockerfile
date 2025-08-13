FROM alpine:latest as builder

WORKDIR /frontend-build

RUN apk update && apk add nodejs npm

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM alpine:latest

RUN apk update && apk add nginx

COPY --from=builder frontend-build/nginx/nginx.conf etc/nginx/http.d/default.conf

WORKDIR /var/www/frontend

COPY --from=builder frontend-build/dist/ .

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]