import { Module } from '@nestjs/common';
import { WordsTypesService } from './words-types.service';
import { WordsTypesController } from './words-types.controller';

@Module({
  providers: [WordsTypesService],
  controllers: [WordsTypesController],
})
export class WordsTypesModule {}
