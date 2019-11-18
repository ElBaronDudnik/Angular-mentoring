import { Injectable } from '@angular/core';
import { coursesMock } from '../../courses-page/courses.mock';
import { CourseInterface } from '../../courses-page/course.interface';
import { Course } from '../../courses-page/course.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  courses = coursesMock;
  constructor() { }

  getCoursesList(): CourseInterface[] {
    return this.courses;
  }

  createCourse(props: CourseInterface): CourseInterface {
    const course = new Course(props);
    return course;
  }

  getCourseById(id: number): CourseInterface | undefined {
    const course = coursesMock.find(item => item.id === id);
    return course;
  }

  updateItem(oldCourse: CourseInterface, newCourse: CourseInterface): void {
    const index = coursesMock.findIndex(el => el === oldCourse);
    coursesMock[index] = newCourse;
  }

  removeItem(id: number): CourseInterface[] {
    const index = coursesMock.findIndex(el => el.id === id);
    coursesMock.splice(index, 1);
    return coursesMock;
  }
}


// {
//   id: 10,
//     title: 'Angular Course',
//   creationDate: new Date(12, 11, 2019),
//   duration: 12,
//   description: 'Angular course description'
// }
