import { Action } from '@ngrx/store';
import { ILogin } from 'app/core/services/auth.service';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] Login Fail';
export const GET_USER_INFO = '[Auth] Get User Info';
export const LOGOUT = '[Auth] Logout';
export const AUTO_LOGIN = '[Auth] Auto Login';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: { email: string, password: string }) {}
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;

    constructor(public payload: string) {}
}

export class GetUserInfo implements Action {
  readonly type = GET_USER_INFO;

  constructor(public payload: {user: ILogin}) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export type AuthActions = 
  | Login 
  | Logout 
  | LoginSuccess 
  | LoginFail 
  | GetUserInfo
  | AutoLogin;
