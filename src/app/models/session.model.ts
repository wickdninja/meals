import { User } from './user.model';

export class Session {
  user: User = null;
  authenticated: boolean = false;
}
