import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { SignoutGuard } from './guards/signout.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes = RouterModule.forRoot([
  { path: 'login', component: LoginComponent },
  { path: '', loadChildren: 'app/main/main.module#MainModule' },
  { path: '**', component: NotFoundComponent }
] as Routes);

export const guards = [AuthGuard, SignoutGuard];
