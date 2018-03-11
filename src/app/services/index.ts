import { ISessionService } from './i-session.service';
import { AppService } from './app.service';
import { UUID } from './uuid.service';

export const services = [ISessionService, AppService, UUID];
