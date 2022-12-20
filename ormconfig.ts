import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config({
  path: __dirname + '/.env',
});

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(<string>process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [__dirname + '/src/entities/**/*.entity.{ts,js}'],
  /* Note : it is unsafe to use synchronize: true for schema synchronization
    on production once you get data in your database. */
  // synchronize: true,
  timezone: '+00:00',
  autoLoadEntities: true,
};

console.log(typeOrmModuleOptions)

const OrmConfig = {
  ...typeOrmModuleOptions,
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/src/database/migrations/*.ts'],
  seeds: [__dirname + '/src/database/seeds/*.seed.{ts,js}'],
  cli: {
    migrationsDir: __dirname + '/src/database/migrations',
  },
};

export const ormConfigDataSource = new DataSource(OrmConfig as any);
