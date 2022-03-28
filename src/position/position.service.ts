import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PositionCreateDTO } from './dto/create-position.input';
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

  async create(pos: PositionCreateDTO) {
    return await this.position.save(pos);
  }
}
