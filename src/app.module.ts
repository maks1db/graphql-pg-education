import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionModule } from './position/position.module';
import { EmployeeModule } from './employee/employee.module';
import * as ormConfig from './ormconfig';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ArtModule } from './art/art.module';
@Module({
  imports: [
    PositionModule,
    EmployeeModule,
    ArtModule,
    TypeOrmModule.forRoot(ormConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
