import { Injectable } from '@angular/core';
import { coursesMock } from '../../courses-page/courses.mock';
import { CourseInterface } from '../../courses-page/course.interface';
import { Course } from '../../courses-page/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: CourseInterface[] = [...coursesMock];
  constructor() {}

  getCoursesList(): CourseInterface[] {
    return this.courses;
  }

  createCourse(props: CourseInterface): CourseInterface[] {
    const course = new Course(props);
    this.courses.push(course);
    return this.courses;
  }

  getCourseById(id: number): CourseInterface | undefined {
    const course = this.courses.find((item: CourseInterface) => item.id === id);
    return course;
  }

  updateItem(oldCourse: CourseInterface, newCourse: CourseInterface): void {
    const index = this.courses.findIndex((el: CourseInterface) => el === oldCourse);
    this.courses[index] = newCourse;
  }

  removeItem(id: number): CourseInterface[] {
    const index = this.courses.findIndex((el: CourseInterface) => el.id === id);
    this.courses.splice(index, 1);
    return this.courses;
  }
}

