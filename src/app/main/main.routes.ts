import { RouterModule, Routes } from '@angular/router';

import { MealListComponent } from './meal-list/meal-list.component';
import { MealComponent } from './meal/meal.component';

export const mainRoutes = RouterModule.forChild([
  { path: 'meals', component: MealListComponent },
  { path: 'meals/:id', component: MealComponent }
] as Routes);
