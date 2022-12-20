FROM public.ecr.aws/m8x6y1w4/node:14
WORKDIR /app
RUN apt install make gcc g++ python

COPY . .

RUN npm install			   

RUN npm run build

EXPOSE 8080