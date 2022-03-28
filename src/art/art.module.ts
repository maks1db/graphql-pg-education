import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Art } from './entity/art.entity';
import { ArtResolver } from './art.resolver';
import { ArtService } from './art.service';
import { ArtEmployeeModule } from '../art-employee/art-employee.module';

@Module({
  imports: [TypeOrmModule.forFeature([Art]), ArtEmployeeModule],
  providers: [ArtService, ArtResolver],
})
export class ArtModule {}
