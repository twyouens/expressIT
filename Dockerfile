# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app source code to the working directory
COPY . .

# Expose the port on which your app will listen
EXPOSE 8080

# Set the environment variable
ENV NODE_ENV=production

# Define the command to run your app
CMD ["npm", "run", "prod"]