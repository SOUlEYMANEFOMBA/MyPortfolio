# Utiliser une image Node.js pour Next.js
FROM node:18-alpine

# Installer git
RUN apk add --no-cache git
WORKDIR /app
# Copier package.json et package-lock.json depuis le répertoire parent
COPY ../package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
