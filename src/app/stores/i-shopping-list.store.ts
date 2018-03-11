import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ShoppingList } from '../models/shopping-list.model';

@Injectable()
export class IShoppingListStore {
  lists: Observable<ShoppingList[]>;
}
