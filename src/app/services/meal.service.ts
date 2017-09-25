import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Meal } from '../models/meal.model';
import { IMealService } from './i-meal.service';

@Injectable()
export class MealService implements IMealService {
  meals$: Observable<Meal[]>;
}
