import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShoppingList } from './models/shopping-list.model';
import { AuthGuard, SignoutGuard } from './shared/guards';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ShoppingList },
  { path: 'meals', component: MealListComponent },
  { path: 'meals/', component: MealListComponent },
  { path: '**', component: NotFoundComponent }
];

export const appRoutes = RouterModule.forRoot(routes);

export const authProviders = [AuthGuard, SignoutGuard];
