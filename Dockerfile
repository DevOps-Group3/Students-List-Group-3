# Use an official Node.js runtime as a parent image
# We are using Node.js version 20 with an Alpine Linux base image for its small size and efficiency.
FROM node:20-alpine

# Set the working directory inside the container
# This is where all the application files will be stored and run from within the container.
WORKDIR /app

# Copy the package.json and package-lock.json files and install dependencies
# By copying and installing dependencies separately, we take advantage of Docker’s layer caching.
# This means that if the package files haven’t changed, Docker can skip this step during rebuilds.
COPY package*.json ./
RUN npm install

# Copy the rest of the application code into the container
# This includes the source code, public files, and any other necessary resources.
COPY . .

# Build the application for production
# This step creates an optimized build of the React application, ready for deployment.
RUN npm run build

# Expose the port the app runs on
# Port 3000 is typically used for React applications.
EXPOSE 3000

# Run the application
# The default command to start the application. "npm start" is typically used to launch the app in production mode.
CMD ["npm", "start"]
