import { Observable } from 'rxjs/Observable';

import { Ingredient } from './ingredient.model';
import { Meal } from './meal.model';

export class ShoppingList {
  meals: Observable<Array<Meal>>;
  ingedients: Observable<Array<Ingredient>>;
}
