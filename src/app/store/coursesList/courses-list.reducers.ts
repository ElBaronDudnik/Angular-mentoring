import { CourseInterface } from 'app/courses-page/course.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
  addCourse,
  deleteCourse,
  loadMore,
  setBiggestId,
  setCourses,
  updateCourse
} from './courses-list.actions';
import { coursesMock } from '../../courses-page/courses.mock';

export interface CoursesState {
    courses: CourseInterface[] | [];
    lastId: number;
}

const initialState = {
    courses: coursesMock,
    lastId: 0
};

const reducer = createReducer(
  initialState,
  on(setBiggestId, (state, {id}) => ({...state, lastId: id})),
  on(setCourses, (state, {courses}) => ({...state, courses })),
  on(loadMore, (state, {courses}) => ({...state, courses: state.courses.concat(courses)})),
  on(addCourse,
    (state, course) => ({...state, courses: [...state.courses, course]})),
  on(deleteCourse,
    (state, {id}) => ({...state,  courses: state.courses.filter((item: CourseInterface) => item.id !== id)})),
  on(updateCourse,
    (state, {id, course}) => ({...state,
      courses: state.courses.map((item: CourseInterface) =>
        state.courses[id] = item.id === id ? course : state.courses[id])})),
);

export function CoursesListReducer(state: CoursesState | undefined, action: Action) {
  return reducer(state, action);
}
