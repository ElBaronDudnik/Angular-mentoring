import * as CourseList from './courses-list.actions';
import { coursesMock } from '../../../courses.mock';
import { CourseInterface } from 'app/courses-page/course.interface';

export interface State {
    courses: CourseInterface[]
}

const initialState = {
    courses: coursesMock
}

export function CoursesListReducer(
    state = initialState, 
    action: CourseList.CourseListActions) {
    switch (action.type) {
        case CourseList.ADD_COURSE:
            return {
                ...state,
                courses: [...state.courses, action.payload]
            };
        case CourseList.DELETE_COURSE:
            return {
                ...state,
                courses: state.courses.filter(course => course.id !== action.payload)
            };
        case CourseList.UPDATE_COURSE:
            const course = state.courses[action.payload.index];
            const updatedCourse = {
                ...course,
                ...action.payload.course
            };
            const updatedCourses = [...state.courses];
            updatedCourses[action.payload.index] = updatedCourse;
            return {
                ...state,
                courses: updatedCourses
            }
        default:
            return state;
    }
}