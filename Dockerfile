# Use the official Node.js LTS image as the base image
FROM node:lts

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if you're using npm) to the container
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install build
# Copy all the app files to the container
COPY . .

# Expose the port that your NestJS app listens on (change to your app's actual port)
EXPOSE 3000

# Start the NestJS app
CMD ["npm", "run", "start:prod"]
