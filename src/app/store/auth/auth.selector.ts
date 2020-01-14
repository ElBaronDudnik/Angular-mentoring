import { AppState } from '../app.reducer';
import { createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducers';

export const selectFeature = (state: AppState) => state.auth;

export const selectToken = createSelector(
  selectFeature,
  (state: AuthState) => state.token
);
