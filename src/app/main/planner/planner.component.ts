import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { WeekDays } from '../../models/days-of-the-week.enum';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {
  public foodCtrl: FormControl;
  public filteredFoods: Observable<any[]>;
  days: any[] = [
    {
      date: '10/6/17',
      name: WeekDays.Friday,
      meals: ['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4']
    },
    {
      date: '10/7/17',
      name: WeekDays.Saturday,
      meals: ['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4']
    },
    {
      date: '10/8/17',
      name: WeekDays.Sunday,
      meals: ['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4']
    },
    {
      date: '10/9/17',
      name: WeekDays.Monday,
      meals: ['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4']
    },
    {
      date: '10/10/17',
      name: WeekDays.Tuesday,
      meals: ['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4']
    },
    {
      date: '10/11/17',
      name: WeekDays.Wednesday,
      meals: ['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4']
    },
    {
      date: '10/12/17',
      name: WeekDays.Thursday,
      meals: ['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4']
    },
    {
      date: '10/13/17',
      name: WeekDays.Friday,
      meals: ['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4']
    },
    {
      date: '10/14/17',
      name: WeekDays.Saturday,
      meals: ['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4']
    },
    {
      date: '10/15/17',
      name: WeekDays.Sunday,
      meals: ['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4']
    },
    {
      date: '10/16/17',
      name: WeekDays.Monday,
      meals: ['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4']
    },
    {
      date: '10/17/17',
      name: WeekDays.Tuesday,
      meals: ['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4']
    },
    {
      date: '10/18/17',
      name: WeekDays.Wednesday,
      meals: ['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4']
    },
    {
      date: '10/19/17',
      name: WeekDays.Thursday,
      meals: ['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4']
    }
  ];
  foods: any[] = [
    {
      name: 'Asparagus Shoots',
      cost: 5.42,
      img:
        'http://www.freefoodphotos.com/imagelibrary/vegetables/slides/asparagus_shoots.jpg'
    },
    {
      name: 'Chorizo Cheese',
      cost: 15.42,
      img:
        'http://www.freefoodphotos.com/imagelibrary/meals/slides/chorizo_cheese.jpg'
    },
    {
      name: 'Ribeye Fillet Steak',
      cost: 22.21,
      img:
        'http://www.freefoodphotos.com/imagelibrary/meals/slides/eye_fillet_steak.jpg'
    },
    {
      name: 'Pizza',
      cost: 12.12,
      img:
        'http://www.freefoodphotos.com/imagelibrary/meals/slides/takeaway_pizza.jpg'
    },
    {
      name: 'Spagetti Sandwich',
      cost: 2.77,
      img:
        'http://www.freefoodphotos.com/imagelibrary/meals/slides/spaghetti_toast.jpg'
    }
  ];

  constructor() {
    this.foodCtrl = new FormControl();
    this.filteredFoods = this.foodCtrl.valueChanges
      .startWith(null)
      .map(state => (state ? this.filterStates(state) : this.foods.slice()));
  }

  filterStates(name: string) {
    return this.foods.filter(
      state => state.name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
  }

  ngOnInit(): void {}
}
