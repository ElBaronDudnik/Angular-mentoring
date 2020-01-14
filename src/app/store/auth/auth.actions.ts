import { createAction, props } from '@ngrx/store';
import { ILogin } from '../../login-page/login/login.interface';

export const login = createAction(
  '[Login Page] Login',
  props<{ email: string, password: string }>()
)

export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ token: string }>()
)

export const getUserInfo = createAction(
  '[Login Page] Get User Info',
  props<{ user: ILogin }>()
)

export const loginFail = createAction(
  '[Login Page] Login Fail',
  props<{ error: string }>()
)

export const logout = createAction(
  '[Login Page] Logout',
)

export const autoLogin = createAction(
  '[Login Page] Auto Login',
)
