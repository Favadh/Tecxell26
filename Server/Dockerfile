FROM node:20-slim
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev --verbose --no-audit --no-fund
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]