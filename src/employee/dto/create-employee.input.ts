import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EmployeeCreateDTO {
  @Field()
  name: string;
  @Field()
  positionId: number;
}
