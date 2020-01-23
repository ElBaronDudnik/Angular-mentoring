import { ActionReducerMap } from '@ngrx/store';
import { CoursesListReducer, CoursesState } from './coursesList/courses-list.reducers';
import { AuthReducer, AuthState } from './auth/auth.reducers';

export interface AppState {
    courseList: CoursesState;
    auth: AuthState;
}

export const appReducer: ActionReducerMap<AppState> = {
    courseList: CoursesListReducer,
    auth: AuthReducer
};
