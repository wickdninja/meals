import { UUID } from '../services/uuid.service';

export class Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  constructor(uuid: UUID) {
    this.id = UUID.create();
  }
}
