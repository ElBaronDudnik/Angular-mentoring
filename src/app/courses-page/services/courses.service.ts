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
  private courses!: CourseInterface[];
  private coursesUrl = 'courses';

  constructor(private apiService: ApiService) {
   this.getCoursesList();
  }

  getCoursesList(start?: number, count?: number) {
    return this.apiService.get('courses',`start=${start}&count=${count}`);
  }

  createCourse(props: CourseInterface) {
    const course = new Course(props);
    this.apiService.createCourse(this.coursesUrl, course).subscribe(() => {});
  }

  getCourseById(id: number): Observable<CourseInterface> {
    return this.apiService.getCoursesById(this.coursesUrl, id);
  }

  updateItem(oldCourse: CourseInterface, newCourse: CourseInterface): void {
    const index = this.courses.findIndex((el: CourseInterface) => el === oldCourse);
    this.courses[index] = newCourse;
  }

  searchItem(searchQuery: string): Observable<CourseInterface[]> {
    return this.apiService.get('courses', `textFragment=${searchQuery}`);
  }

  removeItem(id: number): Observable<CourseInterface[]> {
    return this.apiService.deleteCourse(this.coursesUrl, id);
  }
}

