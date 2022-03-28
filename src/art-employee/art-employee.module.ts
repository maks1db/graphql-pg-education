import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtEmployeeService } from './art-employee.service';
import { ArtEmployee } from './entity/art-employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArtEmployee]), ArtEmployeeService],
  exports: [ArtEmployeeService],
})
export class ArtEmployeeModule {}
