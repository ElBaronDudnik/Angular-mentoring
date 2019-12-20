import { Injectable } from '@angular/core';
import { CourseInterface } from '../../courses-page/course.interface';
import { Course } from '../../courses-page/course.model';
import { CoursesPageModule } from '../courses-page.module';
import { ApiService } from '../../core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: CoursesPageModule
})
export class CoursesService {
  private courses !: CourseInterface[];
  constructor(private apiService: ApiService) {
    this.getCoursesList();
  }

  getCoursesList(start?: number, count?: number) {
    this.apiService.getCourses(start, count).subscribe(courses => this.courses = courses);
  }

  loadCourses() {
    return this.courses;
  }

  createCourse(props: CourseInterface) {
    const course = new Course(props);
    this.apiService.createCourse(course).subscribe(() => {});
  }

  getCourseById(id: number): Observable<CourseInterface> {
    return this.apiService.getCoursesById(id);
  }

  updateItem(oldCourse: CourseInterface, newCourse: CourseInterface): void {
    const index = this.courses.findIndex((el: CourseInterface) => el === oldCourse);
    this.courses[index] = newCourse;
  }

  removeItem(id: number): Observable<CourseInterface[]> {
    return this.apiService.deleteCourse(id);
  }
}

