import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { WordsTypesModule } from '../words-types/words-types.module';

@Module({
  imports: [WordsTypesModule],
})
export class AppModule {}
