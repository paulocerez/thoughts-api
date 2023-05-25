FROM node:18

WORKDIR /server
COPY package*.json ./
RUN npm install
COPY . ./
RUN npx prisma generate

# EXPOSE 3001

CMD ["npm", "start"] 