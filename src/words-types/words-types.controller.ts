import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { WordsTypesService } from './words-types.service';

@Controller('words-types')
export class WordsTypesController {
  constructor(private readonly wordsTypesService: WordsTypesService) {}

  @Post()
  @HttpCode(200)
  async defineTypes(@Body('text') text: string): Promise<Map<string, number>> {
    return this.wordsTypesService.defineTypes(text);
  }
}
