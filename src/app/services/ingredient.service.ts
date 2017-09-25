import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Ingredient } from '../models/ingredient.model';
import { IIngredientService } from './i-ingredient.service';

@Injectable()
export class IngredientStore implements IIngredientService {
  ingedients$: Observable<Ingredient[]>;
}
