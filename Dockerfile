# Stage 1: Build
FROM node:23-bookworm AS build-stage

WORKDIR /app

COPY app/package*.json ./
RUN npm ci

COPY app/ .

ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

RUN npm run build

# Stage 2: Production
FROM nginx:stable-alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 2106

CMD ["nginx", "-g", "daemon off;"]