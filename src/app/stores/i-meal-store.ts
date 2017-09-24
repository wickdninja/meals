import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Meal } from '../models/meal.model';

@Injectable()
export class IMealStore {
  public meals$: Observable<Array<Meal>>;
}
