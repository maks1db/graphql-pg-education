import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ArtCreateDTO {
  @Field()
  name: string;

  @Field(() => [Int])
  employeeIds: number[];
}
