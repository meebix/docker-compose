FROM node:18.12
WORKDIR /usr/local/src
COPY . .
RUN npm ci
CMD npm run dev