import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ArtCreateDTO } from './dto/create-art.input';
import { Art } from './entity/art.entity';
import { ArtService } from './art.service';

@Resolver(() => Art)
export class ArtResolver {
  constructor(private artService: ArtService) {}

  @Query(() => [Art], {
    name: 'getAllArts',
    description: 'Получение всех артов организации',
  })
  findAll() {
    return this.artService.findAll();
  }

  @Query(() => Art, {
    name: 'getArt',
    description: 'Получение арта по id',
  })
  find(@Args('id') id: number) {
    return this.artService.find(id);
  }

  @Mutation(() => Art, {
    name: 'createArt',
    description: 'Создание нового арта',
  })
  create(@Args('art') item: ArtCreateDTO) {
    return this.artService.create(item);
  }
}
