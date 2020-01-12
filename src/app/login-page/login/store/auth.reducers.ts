import * as AuthActions from './auth.actions';
import { ILogin } from 'app/core/services/auth.service';

export interface State {
    token: string;
    authError: string;
    isAuth: boolean;
    user: ILogin;
}

const initialState = {
    token: null,
    authError: null,
    isAuth: false,
    user: {}
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
      case AuthActions.LOGIN:
        return {
          ...state,
          authError: null
        }
      case AuthActions.LOGIN_SUCCESS:
        const token = action.payload || localStorage.getItem('token');
        return {
            ...state,
            authError: null,
            isAuth: true,
            token
        }
      case AuthActions.LOGOUT:
        return {
          ...state,
          isAuth: false,
          token: null
        }
      case AuthActions.GET_USER_INFO:
        const newUser = action.payload.user;
        return {
          ...state,
          user: newUser
        }
      case AuthActions.LOGIN_FAIL:
        const error = action.payload;
        return {
          ...state,
          authError: error
        }
      default:
        return state;
    }
}
