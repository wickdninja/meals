import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Ingredient } from '../models/ingredient.model';
import { IIngredientStore } from './i-ingredient.store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const key = 'ingredients';
@Injectable()
export class IngredientStore implements IIngredientStore {
  private _ingredients = new Array<Ingredient>();
  private publisher = new BehaviorSubject<Ingredient[]>(null);
  ingedients = this.publisher.asObservable();

  private publish() {
    this.publisher.next(this._ingredients);
    this.save();
  }

  private save() {
    window.localStorage.setItem(key, JSON.stringify(this._ingredients));
  }

  load() {
    const tmp = window.localStorage.getItem(key);
    this._ingredients = tmp
      ? (JSON.parse(tmp) as Ingredient[])
      : new Array<Ingredient>();
    this.publish();
  }

  add(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.publish();
  }

  remove(id: string) {
    this._ingredients = this._ingredients.filter(
      ingredient => ingredient.id !== id
    );
    this.publish();
  }
}
