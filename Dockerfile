FROM public.ecr.aws/m8x6y1w4/node:14 as builder
WORKDIR /app
RUN apt install make gcc g++ python
COPY package*.json ./
RUN npm install	
COPY . .
RUN npm run build

FROM public.ecr.aws/m8x6y1w4/node:14 as production
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 8080

RUN chmod +x ./entry-cmd.sh
ENTRYPOINT ["./entry-cmd.sh"]