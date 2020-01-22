import { createAction, props } from '@ngrx/store';
import { CourseInterface, IAuthors } from 'app/courses-page/course.interface';

export interface ICoursesNumber {
  start: number;
  count: number;
}

export interface ICourseId { id: number; }
export interface IEvent { event: Event; }

export const getCourses = createAction(
  '[Course Page] Get Courses',
  props<ICoursesNumber>()
);

export const getCourseById = createAction(
  '[Course Page] Get Course By Id',
  props<ICourseId>()
);

export const searchCourses = createAction(
  '[Course Page] Search Courses',
  props<IEvent>()
);

export const setCourses = createAction(
  '[Courses Page] Set Courses',
  props<{ courses: CourseInterface[] }>()
);

export const addCourse = createAction(
  '[Course Page] Add Course',
  props<CourseInterface>()
);

export const deleteCourse = createAction(
  '[Course Page] Delete Course',
  props<ICourseId>()
);

export const updateCourse = createAction(
  '[Course Page] Update Course',
  props<{ id: number, course: CourseInterface }>()
);

export const getBiggestId = createAction(
  '[Course Page] Get Biggest Id'
);

export const setBiggestId = createAction(
  '[Course Page] Set Biggest Id',
  props<{ id: number }>()
);

export const loadMore = createAction(
  '[Course Page] Load More',
  props<{ courses: CourseInterface[] }>()
);

export const getAuthors = createAction(
  '[Course Page] Get Authors'
);

export const setAuthors = createAction(
  '[Course Page] Set Authors',
  props<{ authors: IAuthors[] }>()
);
