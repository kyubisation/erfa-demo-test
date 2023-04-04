FROM node:18

# Set NODE_ENV to 'production', which is the recommended approach
# for Node.js container images. Various packages respect this environment
# variable and switch to production mode when set to 'production'.
ENV NODE_ENV=production

COPY package*.json .
# As we omit dev dependencies, husky will not get installed and fail the installation.
# Due to this we remove the prepare script from the package.json in the container build.
RUN npm pkg delete scripts.prepare && npm ci --omit=dev
COPY dist/ dist/

EXPOSE 8080

CMD ["npm", "run", "--loglevel info", "start:dist"]

USER node
