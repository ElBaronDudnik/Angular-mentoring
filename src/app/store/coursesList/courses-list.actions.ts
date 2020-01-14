import { createAction, props } from '@ngrx/store';
import { CourseInterface } from 'app/courses-page/course.interface';

export const getCourses = createAction(
  '[Course Page] Get Courses',
  props<{ start: number, count: number }>()
);

export const getCourseById = createAction(
  '[Course Page] Get Course By Id',
  props<{ id: number }>()
);

export const searchCourses = createAction(
  '[Course Page] Search Courses',
  props<{ event: Event }>()
);

export const setCourses = createAction(
  '[Courses Page] Set Courses',
  props<{ courses: CourseInterface[] }>()
);

export const addCourse = createAction(
  '[Course Page] Add Course',
  props<{ course: CourseInterface }>()
);

export const deleteCourse = createAction(
  '[Course Page] Delete Course',
  props<{ id: number }>()
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
