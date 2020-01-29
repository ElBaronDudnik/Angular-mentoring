import { CourseInterface, IAuthors } from 'app/courses-page/course.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
  addCourse,
  deleteCourse,
  loadMore, setAuthors,
  setUtilities,
  setCourses,
} from './courses-list.actions';
import { coursesMock } from '../../courses-page/courses.mock';

export interface CoursesState {
    courses: CourseInterface[];
    lastId: number;
    authors: IAuthors[];
    coursesNumber: number;
}

const initialState: CoursesState = {
    courses: coursesMock,
    lastId: 0,
    authors: [{
      name: '',
      lastName: '',
      id: 0
    }],
    coursesNumber: 0
};

const reducer = createReducer(
  initialState,
  on(setUtilities, (state, {id, coursesNumber}) => ({...state, lastId: id, coursesNumber})),
  on(setCourses, (state, {courses}) => ({...state, courses })),
  on(setAuthors, (state, {authors}) => ({...state, authors })),
  on(loadMore, (state, {courses}) => ({...state, courses: state.courses.concat(courses)})),
  on(addCourse,
    (state, {course}) => ({...state, courses: [...state.courses, course]})),
  on(deleteCourse,
    (state, {id}) => ({...state,  courses: state.courses.filter((item: CourseInterface) => item.id !== id)})),
);

export function CoursesListReducer(state: CoursesState | undefined, action: Action) {
  return reducer(state, action);
}
