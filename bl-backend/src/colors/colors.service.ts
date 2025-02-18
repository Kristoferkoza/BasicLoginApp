import { Injectable } from '@nestjs/common';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';

@Injectable()
export class ColorsService {
  create(createColorDto: CreateColorDto) {
    return 'This action adds a new color';
  }

  findAll() {
    return `This action returns all colors`;
  }

  findOne(id: string) {
    return `This action returns a #${id} color`;
  }

  update(id: string, updateColorDto: UpdateColorDto) {
    return `This action updates a #${id} color`;
  }

  remove(id: string) {
    return `This action removes a #${id} color`;
  }
}
