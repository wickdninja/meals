import { RouterModule, Routes } from '@angular/router';

import { MealListComponent } from './meal-list/meal-list.component';
import { MealComponent } from './meal/meal.component';
import { SettingsComponent } from './settings/settings.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const mainRoutes = RouterModule.forChild([
  { path: 'meals', component: MealListComponent },
  { path: 'meals/:id', component: MealComponent },
  { path: 'list', component: ShoppingListComponent },
  { path: 'settings', component: SettingsComponent }
] as Routes);
