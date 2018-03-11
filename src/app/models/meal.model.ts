import { Ingredient } from './ingredient.model';
import { UUID } from '../services/uuid.service';
import { Observable } from 'rxjs/Observable';

export class Meal {
  id: string;
  name: string;
  ingredients: Observable<Ingredient[]>;
  constructor() {
    this.id = UUID.create();
  }
}
