import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Ingredient } from '../models/ingredient.model';
import { IIngredientStore } from './i-ingredient.store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class IngredientStore implements IIngredientStore {
  private publisher = new BehaviorSubject<Ingredient[]>(
    new Array<Ingredient>()
  );
  ingedients = this.publisher.asObservable();
}
