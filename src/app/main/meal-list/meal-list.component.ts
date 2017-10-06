import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  tiles = [
    { text: 'One', color: 'lightblue' },
    { text: 'Two', color: 'lightgreen' },
    { text: 'Three', color: 'lightpink' },
    { text: 'Four', color: '#DDBDF1' },
    { text: 'Five', color: 'lightblue' },
    { text: 'Six', color: 'lightgreen' },
    { text: 'Seven', color: 'lightpink' },
    { text: 'Eight', color: '#DDBDF1' }
  ];
  ngOnInit() {}
}
