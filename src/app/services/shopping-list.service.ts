import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ShoppingList } from '../models/shopping-list.model';
import { IShoppingListService } from './i-shopping-list.service';

@Injectable()
export class ShoppingListService implements IShoppingListService {
  lists$: Observable<ShoppingList[]>;
}
