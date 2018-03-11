import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IIngredientStore } from '../stores/i-ingredient.store';
import { IMealStore } from '../stores/i-meal.store';
import { IShoppingListStore } from '../stores/i-shopping-list.store';

@Injectable()
export class AppService {
  constructor(
    private ingredients: IIngredientStore,
    private meals: IMealStore,
    private lists: IShoppingListStore
  ) {}
}
