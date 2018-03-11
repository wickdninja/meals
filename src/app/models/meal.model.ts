import { Ingredient } from './ingredient.model';
import { UUID } from '../services/uuid.service';
import { Observable } from 'rxjs/Observable';

export class Meal {
  ingredients: Observable<Ingredient[]>;
  id: string;
  constructor(uuid: UUID) {
    this.id = UUID.create();
  }
}
