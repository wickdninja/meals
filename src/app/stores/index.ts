import { IIngredientStore } from './i-ingredient.store';
import { IngredientStore } from './ingredient.store';
import { IMealStore } from './i-meal.store';
import { MealStore } from './meal.store';
import { IShoppingListStore } from './i-shopping-list.store';
import { ShoppingListStore } from './shopping-list.store';

export const stores = [
  { provide: IIngredientStore, useClass: IngredientStore },
  { provide: IShoppingListStore, useClass: ShoppingListStore },
  { provide: IMealStore, useClass: MealStore }
];
