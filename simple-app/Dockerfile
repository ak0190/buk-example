FROM public.ecr.aws/bitnami/node:18
RUN mkdir -p /usr/src/simpleApp
WORKDIR /usr/src/simpleApp
COPY . .
RUN npm install
CMD [ "node", "app.js" ]
