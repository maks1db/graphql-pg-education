import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';

dotenv.config({
  path: `.${process.env.NODE_ENV || 'development'}.env`,
});

const ormConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRESS_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRESS_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],

  migrationsRun: true,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: false,
};

export = ormConfig;
