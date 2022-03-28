import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Position {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'ФИО сотрудника' })
  @Column()
  name: string;
}
