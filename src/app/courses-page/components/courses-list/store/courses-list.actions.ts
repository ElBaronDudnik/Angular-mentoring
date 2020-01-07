import { Action } from '@ngrx/store';
import { Course } from 'app/courses-page/course.model';
import { CourseInterface } from 'app/courses-page/course.interface';

export const ADD_COURSE = 'ADD_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';
export const UPDATE_COURSE = 'UPDATE_COURSE';

export class AddCourse implements Action {
    readonly type = ADD_COURSE;

    constructor(public payload: Course) {}
}

export class DeleteCourse implements Action {
    readonly type = DELETE_COURSE;
    
    constructor(public payload: number){};
}

export class UpdateCourse implements Action {
    readonly type = UPDATE_COURSE;

    constructor(public payload: {index: number, course: CourseInterface}){};
}

export type CourseListActions = AddCourse | DeleteCourse | UpdateCourse;