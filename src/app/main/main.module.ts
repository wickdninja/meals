import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IIngredientService } from '../services/i-ingredient.service';
import { IMealService } from '../services/i-meal.service';
import { IShoppingListService } from '../services/i-shopping-list.service';
import { IngredientService } from '../services/ingredient.service';
import { MealService } from '../services/meal.service';
import { ShoppingListService } from '../services/shopping-list.service';
import { IngredientListItemComponent } from './ingredient-list-item/ingredient-list-item.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { mainRoutes } from './main.routes';
import { MealListItemComponent } from './meal-list-item/meal-list-item.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShoppingListItemComponent } from './shopping-list-item/shopping-list-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  imports: [mainRoutes],
  providers: [
    { provide: IMealService, useClass: MealService },
    { provide: IIngredientService, useClass: IngredientService },
    { provide: IShoppingListService, useClass: ShoppingListService }
  ],
  declarations: [
    MealListComponent,
    MealListItemComponent,
    NavigationComponent,
    IngredientListComponent,
    IngredientListItemComponent,
    ShoppingListComponent,
    ShoppingListItemComponent
  ],
  exports: [
    RouterModule,
    MealListComponent,
    MealListItemComponent,
    NavigationComponent,
    IngredientListComponent,
    IngredientListItemComponent,
    ShoppingListComponent,
    ShoppingListItemComponent
  ]
})
export class MainRoutingModule {}
