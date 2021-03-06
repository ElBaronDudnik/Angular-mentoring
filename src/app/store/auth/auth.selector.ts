import { AppState } from '../app.reducer';
import { createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducers';

export const selectAuthState = (state: AppState) => state.auth;

export const selectToken = createSelector(
  selectAuthState,
  (state: AuthState) => state.token
);

export const selectFullName = createSelector(
  selectAuthState,
  (state: AuthState) => {
    const fullName = `${state.userLogin.name.first} ${state.userLogin.name.last}`;
    return fullName;
  }
);
