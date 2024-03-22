FROM node:lts-bullseye as build
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

# FROM node:lts-bullseye as build

# COPY package*.json .
# RUN npm ci
# COPY . .
# RUN npm run build

# ### STAGE 2
FROM nginx:alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
# COPY ./config/default.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /var/www/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



# Build the application for production => to BlackBox
# FROM node:alpine AS prod
# WORKDIR /app
# ENV NODE_ENV=production
# CMD ["node", "./index.js"]