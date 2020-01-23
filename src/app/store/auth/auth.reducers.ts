import { Action, createReducer, on } from '@ngrx/store';
import {
  login,
  loginSuccess,
  loginFail,
  logout,
  getUserInfo
} from './auth.actions';
import { ILogin } from '../../login-page/login/login.interface';

export interface AuthState {
    token: string;
    authError: string;
    userLogin: ILogin;
}

const initialState: AuthState = {
    token: '',
    authError: '',
    userLogin: {
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
  on(login, state => ({...state, authError: ''})),
  on(loginSuccess, (state, {token}) => ({...state, authError: '', token})),
  on(loginFail, (state, {error}) => ({...state, authError: error})),
  on(getUserInfo, (state, {user}) => ({...state, userLogin: {...user}})),
  on(logout, state => ({...state, token: ''})),
);

export function AuthReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
