# Use the official Node.js image as a base image
FROM node:latest

# Create and set the working directory
WORKDIR /usr/src/app

# Copy the source files to the container
COPY src .

# Install http-server package globally
RUN npm install -g http-server

# Expose port 8080
EXPOSE 8000

# Command to run the HTTP server on port 8080
CMD [ "http-server", "-p", "8000" ]
