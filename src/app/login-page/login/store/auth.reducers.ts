import { ILogin, IName } from '../../../core/services/auth.service';
import * as AuthActions from './auth.actions';

export class User {
  constructor(
      public id: number,
      public fakeToken: string,
      public login: string,
      public password: string,
      public name: IName,
    ) {}
}

export interface State {
    user: ILogin;
}

const initialState = {
    user: null
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case AuthActions.LOGIN:
          const user = new User(
            action.payload.id,
            action.payload.fakeToken,
            action.payload.login,
            action.payload.password,
            action.payload.name,
            )
          return {
              ...state,
              user
          }
      case AuthActions.LOGOUT:
        return {
          ...state,
          user: null
        }
      default:
        return state;
    }
}
