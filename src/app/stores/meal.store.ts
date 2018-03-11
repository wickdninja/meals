import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Meal } from '../models/meal.model';
import { IMealStore } from './i-meal.store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const key = 'meals';
@Injectable()
export class MealStore implements IMealStore {
  private _meals = new Array<Meal>();
  private publisher = new BehaviorSubject<Meal[]>(null);
  meals = this.publisher.asObservable();

  private publish() {
    this.publisher.next(this._meals);
    this.save();
  }

  load() {
    const tmp = window.localStorage.getItem(key);
    this._meals = tmp ? (JSON.parse(tmp) as Meal[]) : new Array<Meal>();
    this.publish();
  }

  save() {
    window.localStorage.setItem(key, JSON.stringify(this._meals));
  }

  add(meal: Meal) {
    this._meals.push(meal);
    this.publish();
  }

  remove(id: string) {
    this._meals = this._meals.filter(meal => meal.id !== id);
    this.publish();
  }
}
