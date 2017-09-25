import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Meal } from '../models/meal.model';
import { IMealStore } from './i-meal-store';

@Injectable()
export class MockMealStore implements IMealStore {
  public meals$: Observable<Array<Meal>>;
}
