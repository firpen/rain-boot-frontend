FROM node:24-alpine AS build
WORKDIR /app/
COPY package.json package-lock.json /app/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/rain-boot-frontend/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf