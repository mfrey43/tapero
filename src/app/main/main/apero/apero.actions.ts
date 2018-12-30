import {Action} from '@ngrx/store';
import {Apero} from './apero.model';

export enum ActionTypes {
  Added = '[Apero] added',
  Modified = '[Apero] modified',
  Removed = '[Apero] removed',
}

export class Add implements Action {
  readonly type = ActionTypes.Added;

  constructor(public payload: Apero) {
  }
}

export class Modified implements Action {
  readonly type = ActionTypes.Modified;

  constructor(public payload: Apero) {
  }
}

export class Delete implements Action {
  readonly type = ActionTypes.Removed;

  constructor(public payload: Apero) {
  }
}

export type Union =
  Add
  | Modified
  | Delete;
