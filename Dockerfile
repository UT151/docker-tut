# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Expose a port (if your application listens on a specific port)
EXPOSE 7850:80

# Command to run when the container starts
CMD [ "node", "app.js" ]
