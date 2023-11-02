import { Injectable } from '@nestjs/common';
import vocabulary from './data/vocabulary';

@Injectable()
export class WordsTypesService {
  wordsTypesMap: Map<string, string> = new Map<string, string>();
  defineTypes(text: string): Map<string, number> {
    const words: string[] = text.toLowerCase().split(' ');
    const typesMap: Map<string, number> = new Map<string, number>();

    if (!this.wordsTypesMap.size) {
      Object.keys(vocabulary).forEach((type: string) => {
        typesMap[type] = 0;
        vocabulary[type].forEach((word: string) => {
          this.wordsTypesMap.set(word, type);
        });
      });
    } else {
      Object.keys(vocabulary).forEach((type: string) => (typesMap[type] = 0));
    }

    words.forEach((word: string) => {
      const type: string = this.wordsTypesMap.get(word);
      if (type) {
        typesMap[type]++;
      }
    });

    return typesMap;
  }
}
