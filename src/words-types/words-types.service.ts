import { Injectable } from '@nestjs/common';
import vocabulary from './data/vocabulary';
import TypesMap from './types/typesMap.type';

@Injectable()
export class WordsTypesService {
  wordsTypesMap: Map<string, string> = new Map<string, string>();
  baseTypesMap: TypesMap = {};

  constructor() {
    this.buildInitialMaps();
  }

  private buildInitialMaps(): void {
    Object.keys(vocabulary).forEach((type: string) => {
      this.baseTypesMap[type] = 0;
      vocabulary[type].forEach((word: string) => {
        this.wordsTypesMap.set(word, type);
      });
    });
  }

  defineTypes(text: string): TypesMap {
    const words: string[] = text.toLowerCase().split(' ');
    const typesMap: TypesMap = { ...this.baseTypesMap };

    words.forEach((word: string) => {
      const type: string = this.wordsTypesMap.get(word);
      if (type) {
        typesMap[type]++;
      }
    });

    return typesMap;
  }
}
