# Stage 0, "build-stage", based on Node.js to build the frontend
FROM node:alpine as build
WORKDIR /STech
COPY package*.json /STech/
RUN npm install
COPY . /STech/
RUN npm run build

# Stage 1, based on NGINX to provide a configuration to be used with react-router
# production environment2
FROM nginx:alpine
COPY --from=build /STech/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]