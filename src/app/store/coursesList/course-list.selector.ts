import { AppState } from '../app.reducer';
import { createSelector } from '@ngrx/store';
import { CoursesState } from './courses-list.reducers';

export const selectCourseListState = (state: AppState) => state.courseList;

export const selectCoursesList = createSelector(
  selectCourseListState,
  (state: CoursesState) => state.courses
);

export const selectLastId = createSelector(
  selectCourseListState,
  (state: CoursesState) => state.lastId
);
