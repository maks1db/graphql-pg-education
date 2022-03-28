import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionModule } from './position/position.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      migrations: [`${process.cwd()}/src/migrations/*{.js,.ts}`],
      cli: {
        migrationsDir: `${process.cwd()}/src/migrations/`,
      },
      entities: [],
      synchronize: false,
    }),
  ],
  controllers: [],
  providers: [PositionModule],
})
export class AppModule {}
