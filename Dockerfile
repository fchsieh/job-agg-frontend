FROM node

# Create app directory
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/frontend
WORKDIR /usr/src/app/frontend

# Install dependencies
COPY package*.json ./
RUN npm install

COPY . .

# Set API URL
RUN cp /usr/src/app/frontend/src/api.json.tmp /usr/src/app/frontend/src/api.json

# Start the app
EXPOSE 3000
CMD [ "npm", "start" ]
