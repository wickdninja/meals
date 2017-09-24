import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { MealListItemComponent } from './components/meal-list-item/meal-list-item.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { IngredientListItemComponent } from './components/ingredient-list-item/ingredient-list-item.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './components/shopping-list-item/shopping-list-item.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
