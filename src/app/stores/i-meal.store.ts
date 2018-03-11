import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Meal } from '../models/meal.model';

@Injectable()
export class IMealStore {
  meals: Observable<Meal[]>;
  load(): void {}
  add(meal: Meal): void {}
  remove(id: string): void {}
}
