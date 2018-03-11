import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ShoppingList } from '../models/shopping-list.model';
import { IShoppingListStore } from './i-shopping-list.store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const key = 'shoppinglists';
@Injectable()
export class ShoppingListStore implements IShoppingListStore {
  private _lists = new Array<ShoppingList>();
  private publisher = new BehaviorSubject<ShoppingList[]>(null);
  lists = this.publisher.asObservable();

  private publish() {
    this.publisher.next(this._lists);
    this.save();
  }

  private save() {
    window.localStorage.setItem(key, JSON.stringify(this._lists));
  }

  load() {
    const tmp = window.localStorage.getItem(key);
    this._lists = tmp
      ? (JSON.parse(tmp) as ShoppingList[])
      : new Array<ShoppingList>();
    this.publish();
  }

  add(list: ShoppingList) {
    this._lists.push(list);
    this.publish();
  }

  remove(id: string) {
    this._lists = this._lists.filter(list => list.id !== id);
    this.publish();
  }
}
