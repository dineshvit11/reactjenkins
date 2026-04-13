# Build Stage
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Production Stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html