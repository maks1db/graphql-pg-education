import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Art } from './entity/art.entity';
import { ArtResolver } from './art.resolver';
import { ArtService } from './art.service';

@Module({
  imports: [TypeOrmModule.forFeature([Art])],
  providers: [ArtService, ArtResolver],
})
export class ArtModule {}
