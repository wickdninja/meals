import { NgModule } from '@angular/core';
import {
    MatAutocompleteModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MdButtonModule,
    MdCardModule,
    MdTabsModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IngredientListItemComponent } from './components/ingredient-list-item/ingredient-list-item.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { LoginComponent } from './components/login/login.component';
import { MealListItemComponent } from './components/meal-list-item/meal-list-item.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShoppingListItemComponent } from './components/shopping-list-item/shopping-list-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { IIngredientStore } from './stores/i-ingredient-store';
import { IMealStore } from './stores/i-meal-store';
import { IShoppingListStore } from './stores/i-shopping-list.store';
import { MockIngredientStore } from './stores/mock-ingredient-store';
import { MockMealStore } from './stores/mock-meal.store';
import { MockShoppingListStore } from './stores/mock-shopping-list.store';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MealListComponent,
    MealListItemComponent,
    NavigationComponent,
    IngredientListComponent,
    IngredientListItemComponent,
    NotFoundComponent,
    ShoppingListComponent,
    ShoppingListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    MatTableModule
  ],
  providers: [
    { provide: IMealStore, useClass: MockMealStore },
    { provide: IIngredientStore, useClass: MockIngredientStore },
    { provide: IShoppingListStore, useClass: MockShoppingListStore }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
