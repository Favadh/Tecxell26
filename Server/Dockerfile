FROM node:20-slim
WORKDIR /app
COPY package.json ./
RUN yarn install --production
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]