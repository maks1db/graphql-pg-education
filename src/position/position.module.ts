import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from './entity/position.entity';
import { PositionResolver } from './position.resolver';
import { PositionService } from './position.service';

@Module({
  imports: [TypeOrmModule.forFeature([Position])],
  providers: [PositionService, PositionResolver],
})
export class PositionModule {}
