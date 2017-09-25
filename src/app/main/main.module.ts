import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MdButtonModule,
    MdCardModule,
    MdTabsModule,
} from '@angular/material';
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
import { MealComponent } from './meal/meal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlannerComponent } from './planner/planner.component';
import { SettingsComponent } from './settings/settings.component';
import { ShoppingListItemComponent } from './shopping-list-item/shopping-list-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MdButtonModule,
    MdCardModule,
    MdTabsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTableModule,
    MatSidenavModule,
    MatGridListModule,
    mainRoutes
  ],
  providers: [
    { provide: IMealService, useClass: MealService },
    { provide: IIngredientService, useClass: IngredientService },
    { provide: IShoppingListService, useClass: ShoppingListService }
  ],
  declarations: [
    SettingsComponent,
    MealComponent,
    MealListComponent,
    MealListItemComponent,
    NavigationComponent,
    IngredientListComponent,
    IngredientListItemComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    PlannerComponent
  ],
  exports: [
    RouterModule,
    SettingsComponent,
    MealComponent,
    MealListComponent,
    MealListItemComponent,
    NavigationComponent,
    IngredientListComponent,
    IngredientListItemComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    PlannerComponent
  ]
})
export class MainModule {}
