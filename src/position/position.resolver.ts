import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PositionCreateDTO } from './dto/create-position.input';
import { Position } from './entity/position.entity';
import { PositionService } from './position.service';

@Resolver(() => Position)
export class PositionResolver {
  constructor(private positionService: PositionService) {}

  @Query(() => [Position], {
    name: 'getAllPositions',
    description: 'Получение всех должностей организации',
  })
  findAll() {
    return this.positionService.findAll();
  }

  @Query(() => Position, {
    name: 'getPosition',
    description: 'Получение должности по id',
  })
  find(@Args('id') id: number) {
    return this.positionService.find(id);
  }

  @Mutation(() => Position, {
    name: 'createPosition',
    description: 'Создание новой должности',
  })
  create(@Args('position') position: PositionCreateDTO) {
    return this.positionService.create(position);
  }
}
