import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  foodCtrl: FormControl;
  filteredFoods: Observable<any[]>;
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

  tiles = [
    { text: 'One', cols: 2, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    { text: 'Five', cols: 2, rows: 1, color: 'lightblue' },
    { text: 'Six', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Seven', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Eight', cols: 2, rows: 1, color: '#DDBDF1' }
  ];
  ngOnInit() {}
}
