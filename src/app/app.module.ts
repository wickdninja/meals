import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
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
  MdTabsModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { guards, routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { MainModule } from './main/main.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { stores } from './stores';
import { services } from './services';

@NgModule({
  declarations: [AppComponent, LoginComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
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
    MainModule,
    routes
  ],
  providers: [guards, stores, services],
  bootstrap: [AppComponent]
})
export class AppModule {}
