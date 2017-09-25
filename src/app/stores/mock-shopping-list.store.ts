import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ShoppingList } from '../models/shopping-list.model';
import { IShoppingListStore } from './i-shopping-list.store';

@Injectable()
export class MockShoppingListStore implements IShoppingListStore {
  public lists$: Observable<Array<ShoppingList>>;
}
