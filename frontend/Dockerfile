# Stage 1: Build Angular app
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --configuration frontend

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built Angular app to Nginx public folder
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
