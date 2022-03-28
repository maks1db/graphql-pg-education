import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Art {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'Наименование арта' })
  @Column()
  name: string;
}
