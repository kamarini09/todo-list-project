# Use the Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the application files into the container
COPY . .

# Install dependencies
RUN npm install

# Start the application
CMD ["npm", "start"]

# Define a health check to monitor the container's health
# - `--interval=30s`: Check the container health every 30 seconds
# - `--timeout=10s`: If the health check takes longer than 10 seconds, it fails
# - `--start-period=5s`: Wait 5 seconds after the container starts before performing the first health check
# - `--retries=3`: If the health check fails 3 consecutive times, the container is marked as "unhealthy"
# - `CMD curl -f http://localhost:5000/health || exit 1`: The health check tries to access the /health endpoint
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/health || exit 1

