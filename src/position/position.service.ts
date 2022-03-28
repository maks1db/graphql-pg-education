import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Position } from './entity/position.entity';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position) private position: Repository<Position>,
  ) {}

  findAll() {
    return this.position.find();
  }

  find(id: number) {
    return this.position.findOne({ where: { id } });
  }
}
