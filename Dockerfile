# Stage 1: Build Stage
FROM node:18 AS build

WORKDIR /app
COPY . .

# Optional: Install dependencies if using tools like npm or frameworks
# RUN npm install
# RUN npm run build  # Example for React, Vue, etc.

# Stage 2: Serve Stage
FROM nginx:alpine AS runtime

WORKDIR /usr/share/nginx/html
COPY --from=build /app .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
