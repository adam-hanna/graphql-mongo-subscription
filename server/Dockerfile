FROM node:13

# 1. Create the working directory and give node use permissions
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

# 2. Set working directory
WORKDIR /usr/src/app

# 3. Switch to non-root user
USER node

# 4. Copy package.json and package.lock.json
COPY --chown=node:node package*.json ./

# 5. Install node deps
RUN yarn install

# 6. Copy app
COPY --chown=node:node . .

# 7. Build the app
#RUN npm run build

# 8. Expose the port
EXPOSE 8080
EXPOSE 5000

# 9. Define standard entrypoint
CMD [ "yarn", "run", "start" ]
