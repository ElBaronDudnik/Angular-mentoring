import { Action } from '@ngrx/store';
import { ILogin } from '../../../core/services/auth.service';
import { LOGIN } from './auth.actions';

export interface State {
    user: ILogin
}

const initialState = {
    users: null
};

export function authReducer(state = initialState, action: Action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                users: [...state.users, action]
            }
    }
}