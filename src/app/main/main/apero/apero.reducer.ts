import * as AperoActions from './apero.actions';
import {Apero} from './apero.model';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';

export const aperoAdapter = createEntityAdapter<Apero>();

export interface State extends EntityState<Apero> {
}

export const initialState: State = aperoAdapter.getInitialState();

export function aperoReducer(state = initialState, action: AperoActions.Union) {
  switch (action.type) {

    case AperoActions.ActionTypes.Added:
      return aperoAdapter.addOne(action.payload, state);

    case AperoActions.ActionTypes.Modified:
      return aperoAdapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, state);

    case AperoActions.ActionTypes.Removed:
      return aperoAdapter.removeOne(action.payload.id, state);

    default:
      return state;
  }
}

export const getPizzaState = createFeatureSelector<State>('pizza');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = aperoAdapter.getSelectors(getPizzaState);
