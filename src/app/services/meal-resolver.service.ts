import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { IMealStore } from '../stores/i-meal.store';
import { Meal } from '../models/meal.model';

@Injectable()
export class MealResolver implements Resolve<Meal> {
  constructor(private store: IMealStore, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Meal> {
    const id = route.paramMap.get('id');

    return this.store.meals.take(1).map(meals => {
      const meal = meals
        .filter(m => m.id === id)
        .reduce((prev, val: Meal) => val);
      if (meal) {
        return meal;
      }
      this.router.navigate(['/meals']);
      return null;
    });
  }
}
