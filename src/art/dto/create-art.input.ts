import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ArtCreateDTO {
  @Field()
  name: string;
}
