import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ArtEmployeeCreateDTO {
  @Field(() => Int)
  artId: number;

  @Field(() => [Int])
  employeeIds: number[];
}
