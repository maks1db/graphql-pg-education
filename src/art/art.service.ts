import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArtCreateDTO } from './dto/create-art.input';
import { Art } from './entity/art.entity';

@Injectable()
export class ArtService {
  constructor(@InjectRepository(Art) private art: Repository<Art>) {}

  findAll() {
    return this.art.find();
  }

  find(id: number) {
    return this.art.findOne({ where: { id } });
  }

  async create(pos: ArtCreateDTO) {
    return await this.art.save(pos);
  }
}
