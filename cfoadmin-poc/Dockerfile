# Stage 1: Build the angular app via npm
FROM node:19-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Copy the output of npm build to nginx web server file structure.
# Also copy the environment specific config.json file.
FROM nginx:1.23.2-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf 
COPY --from=build /usr/src/app/dist/cfoadmin-poc /usr/share/nginx/html

COPY ./entrypoint.sh /entrypoint.sh
#RUN chown nginx:nginx /docker-entrypoint.d/entrypoint.sh
#USER nginx
CMD ["sh", "/entrypoint.sh"]