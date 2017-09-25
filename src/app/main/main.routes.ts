import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealComponent } from './meal/meal.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const mainRoutes = RouterModule.forChild([
  { path: 'meals', component: MealListComponent },
  { path: 'meals/:id', component: MealComponent },
  { path: 'list', component: ShoppingListComponent },
  { path: 'account', component: AccountComponent }
] as Routes);
