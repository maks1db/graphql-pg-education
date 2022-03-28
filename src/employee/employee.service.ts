import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PositionService } from '../position/position.service';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { Employee } from './entity/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private employee: Repository<Employee>,
    private position: PositionService,
  ) {}

  findAll() {
    return this.employee.find();
  }

  find(id: number) {
    return this.employee.findOne({ where: { id } });
  }

  findPosition(id: number) {
    return this.position.find(id);
  }

  create(item: EmployeeCreateDTO) {
    return this.employee.save(item);
  }
}
