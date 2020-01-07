import { Action } from '@ngrx/store';
import { ILogin } from '../../../core/services/auth.service';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export class Login implements Action {
    readonly type = LOGIN;
    constructor(
      public payload: ILogin
    ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;

}

export type AuthActions = Login | Logout;
