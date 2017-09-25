import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class IIngredientService {
  ingedients$: Observable<Ingredient[]>;
}
