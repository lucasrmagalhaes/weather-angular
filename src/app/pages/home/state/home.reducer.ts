import { Action, createReducer, on } from "@ngrx/store";
import * as fromHomeActions from './home.actions';

export interface HomeState {
  text: string
}

export const homeInitialState: HomeState = {
  text: 'Canoas'
}

const reducer = createReducer(
  homeInitialState,
  on(fromHomeActions.changeText, (state, { text }) => ({
    ...state,
    text
  }))
);

export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
  return reducer(state, action);
}
