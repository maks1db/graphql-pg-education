import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../employee/entity/employee.entity';
import { ArtEmployeeCreateDTO } from './dto/create-art-employee.input';
import { ArtEmployee } from './entity/art-employee.entity';

@Injectable()
export class ArtEmployeeService {
  constructor(
    @InjectRepository(Employee) private artEmployee: Repository<ArtEmployee>,
  ) {}

  find(artId: number) {
    this.artEmployee.findOne({ where: { artId } });
  }

  create(data: ArtEmployeeCreateDTO) {
    return this.artEmployee.insert(
      data.employeeIds.map((x) => ({
        artId: data.artId,
        employeeId: x,
      })),
    );
  }
}
