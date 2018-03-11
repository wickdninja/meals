import { UUID } from '../services/uuid.service';

export class User {
  id: string;
  name: string;
  constructor() {
    this.id = UUID.create();
  }
}
