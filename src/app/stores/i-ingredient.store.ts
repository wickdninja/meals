import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class IIngredientStore {
  ingedients: Observable<Ingredient[]>;
  load(): void {}
  add(ingredient: Ingredient): void {}
  remove(id: string): void {}
}
