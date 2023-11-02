import { Controller, Post, Body } from '@nestjs/common';
import { WordsTypesService } from './words-types.service';

@Controller('words-types')
export class WordsTypesController {
  constructor(private readonly wordsTypesService: WordsTypesService) {}

  @Post()
  async defineTypes(@Body('text') text: string): Promise<Map<string, number>> {
    return this.wordsTypesService.defineTypes(text);
  }
}
