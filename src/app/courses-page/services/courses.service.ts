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
  private coursesUrl = 'courses';

  constructor(private apiService: ApiService) {
   this.getCoursesList();
  }

  getCoursesList(start?: number, count?: number): Observable<CourseInterface[]> {
    return this.apiService.get('courses', `start=${start}&count=${count}`);
  }

  createCourse(props: CourseInterface) {
    const course = new Course(props);
    this.apiService.post(this.coursesUrl, course).subscribe(() => {});
  }

  getCourseById(id: number): Observable<CourseInterface> {
    return this.apiService.get(`${this.coursesUrl}/${id}`);
  }

  updateItem(oldCourse: CourseInterface, newCourse: CourseInterface): Observable<CourseInterface> {
    return this.apiService.patch(this.coursesUrl, oldCourse.id, newCourse);
  }

  searchItem(searchQuery: string): Observable<CourseInterface[]> {
    return this.apiService.get('courses', `textFragment=${searchQuery}`);
  }

  removeItem(id: number): Observable<CourseInterface[]> {
    return this.apiService.delete(this.coursesUrl, id);
  }
}

