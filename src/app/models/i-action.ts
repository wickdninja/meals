import { ActionTypes } from './action-types.enum';

export interface IAction {
  type: ActionTypes;
  payload: any;
}
