import { Observable } from 'rxjs/Observable';

import { Ingredient } from './ingredient.model';
import { Meal } from './meal.model';
import { UUID } from '../services/uuid.service';

export class ShoppingList {
  id: string;
  meals: Observable<Meal[]>;
  ingedients: Observable<Ingredient[]>;
  constructor() {
    this.id = UUID.create();
  }
}
