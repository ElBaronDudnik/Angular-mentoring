import { Injectable } from '@angular/core';
import { coursesMock } from '../../courses-page/courses.mock';
import { CourseInterface } from '../../courses-page/course.interface';
import { Course } from '../../courses-page/course.model';
import { CoursesPageModule } from '../courses-page.module';

@Injectable({
  providedIn: CoursesPageModule
})
export class CoursesService {
  private courses !: CourseInterface[];
  constructor() {
    this.coursesList = coursesMock;
  }

  get coursesList(): CourseInterface[] {
    return this.courses;
  }

  set coursesList(courses: CourseInterface[]) {
    this.courses = courses;
  }

  createCourse(props: CourseInterface): CourseInterface[] {
    const course = new Course(props);
    this.courses.push(course);
    return this.courses;
  }

  getBiggestId(): number {
    return this.courses.reduce((max, { id }) => id > max ? id : max, 0);
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

