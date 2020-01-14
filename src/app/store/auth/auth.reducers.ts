import { Action, createReducer, on } from '@ngrx/store';
import { login } from './auth.actions';
import { loginSuccess } from './auth.actions';
import { loginFail } from './auth.actions';
import { logout } from './auth.actions';
import { getUserInfo } from './auth.actions';
import { ILogin } from '../../login-page/login/login.interface';

export interface AuthState {
    token: string;
    authError: string;
    user: ILogin;
}

const initialState = {
    token: '',
    authError: '',
    user: {
      login: '',
      password: '',
      name: {
        first: '',
        last: ''
      }
    }
};

const reducer = createReducer(
  initialState,
  on(login, state => ({ ...state, authError: '' })),
  on(loginSuccess, (state, {token}) => ({ ...state, authError: '', token })),
  on(loginFail, (state, {error}) => ({...state, authError: error})),
  on(getUserInfo, (state, {user}) => ({...state, user: {...user}})),
  on(logout, state => ({...state, token: '' })),
);

export function AuthReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
