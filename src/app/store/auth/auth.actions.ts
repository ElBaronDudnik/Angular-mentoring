import { createAction, props } from '@ngrx/store';
import { ILogin } from '../../login-page/login/login.interface';

export interface UserLogin { email: string; password: string; }
export interface UserToken { token: string; }

export const login = createAction(
  '[Login Page] Login',
  props<UserLogin>()
);

export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<UserToken>()
);

export const getUserInfo = createAction(
  '[Login Page] Get User Info',
  props<{ user: ILogin }>()
);

export const loginFail = createAction(
  '[Login Page] Login Fail',
  props<{ error: string }>()
);

export const logout = createAction(
  '[Login Page] Logout',
);

export const autoLogin = createAction(
  '[Login Page] Auto Login',
);
