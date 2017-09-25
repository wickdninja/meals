import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Meal } from '../models/meal.model';

@Injectable()
export class IMealService {
  meals$: Observable<Meal[]>;
}
