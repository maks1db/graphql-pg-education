import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryColumn } from 'typeorm';
import { Employee } from '../../employee/entity/employee.entity';

@ObjectType()
@Entity()
export class ArtEmployee {
  @Field(() => Int)
  @PrimaryColumn()
  artId: number;

  @Field(() => Employee)
  employee: Employee;

  @Field(() => Int)
  @PrimaryColumn()
  employeeId: number;
}
