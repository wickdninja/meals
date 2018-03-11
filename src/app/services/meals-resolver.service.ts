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
import { Meal } from '../models/meal.model';
import { IMealStore } from '../stores/i-meal.store';

@Injectable()
export class MealsResolver implements Resolve<void> {
  constructor(private store: IMealStore, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    this.store.load();
  }
}
