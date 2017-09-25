import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Ingredient } from '../models/ingredient.model';
import { IIngredientStore } from './i-ingredient-store';

@Injectable()
export class MockIngredientStore implements IIngredientStore {
  ingedients$: Observable<Array<Ingredient>>;
}
