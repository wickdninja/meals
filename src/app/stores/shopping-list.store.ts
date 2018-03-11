import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ShoppingList } from '../models/shopping-list.model';
import { IShoppingListStore } from './i-shopping-list.store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShoppingListStore implements IShoppingListStore {
  private publisher = new BehaviorSubject<ShoppingList[]>(
    new Array<ShoppingList>()
  );
  lists = this.publisher.asObservable();
}
