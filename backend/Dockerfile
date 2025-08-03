# Use Node.js LTS base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the backend port (update if different)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
