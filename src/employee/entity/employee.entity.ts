import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Position } from '../../position/entity/position.entity';

@ObjectType()
@Entity()
export class Employee {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'ФИО сотрудника' })
  @Column()
  name: string;

  @Field(() => Position)
  @OneToOne(() => Position)
  position: Position;

  @Field()
  @Column()
  positionId: number;
}
