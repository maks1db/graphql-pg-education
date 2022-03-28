import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PositionService } from '../position/position.service';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { EmployeeService } from './employee.service';
import { Employee } from './entity/employee.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Query(() => [Employee], { name: 'getAllEmployees' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Query(() => Employee, { name: 'getEmployee' })
  find(@Args('id') id: number) {
    return this.employeeService.find(id);
  }

  @Mutation(() => Employee, { name: 'createEmployee' })
  create(@Args('employee') item: EmployeeCreateDTO) {
    return this.employeeService.create(item);
  }

  @ResolveField(() => Employee)
  position(@Parent() employee: Employee) {
    return this.employeeService.findPosition(employee.positionId);
  }
}
