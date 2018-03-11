import { Component, OnInit } from '@angular/core';
import { IMealStore } from '../../stores/i-meal.store';
import { Meal } from '../../models/meal.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  meals: Observable<Meal[]>;
  constructor(private mealStore: IMealStore) {
    this.meals = this.mealStore.meals;
  }
  ngOnInit() {
    console.log('meal list on init');
  }
}
