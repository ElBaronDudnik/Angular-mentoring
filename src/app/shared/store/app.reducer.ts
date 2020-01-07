import * as fromCourseList from 'app/courses-page/components/courses-list/store/courses-list.reducers';
import * as fromAuth from 'app/login-page/login/store/auth.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    courseList: fromCourseList.State,
    auth: fromAuth.State
}

export const appReducer: ActionReducerMap<AppState> = {
    courseList: fromCourseList.CoursesListReducer,
    auth: fromAuth.authReducer
}