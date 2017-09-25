import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Session } from '../models/session.model';

@Injectable()
export class ISessionService {
  session$: Observable<Session>;
}
