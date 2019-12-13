import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CourseInterface, IAuthors } from '../../courses-page/course.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static COURSES_ENDPOINT = 'http://localhost:3004/courses';
  static AUTHORS_ENDPOINT = 'http://localhost:3004/authors';

  constructor(private http: HttpClient) { }

  getCourses(start = 0, count?: number): Observable<CourseInterface[]> {
    return this.http.get<CourseInterface[]>(`${ApiService.COURSES_ENDPOINT}/?start=${start}&count=${count}`);
  }

  searchCourses(textFragment: string): Observable<CourseInterface[]> {
    return this.http.get<CourseInterface[]>(`${ApiService.COURSES_ENDPOINT}/?textFragment=${textFragment}`);
  }

  getCoursesById(id: number): Observable<CourseInterface> {
    return this.http.get<CourseInterface>(`${ApiService.COURSES_ENDPOINT}/${id}`);
  }

  changeCourseById(id: number, newCourse: CourseInterface): Observable<CourseInterface> {
    return this.http.patch<CourseInterface>(`${ApiService.COURSES_ENDPOINT}/#${id}`, newCourse);
  }

  createCourse(course: CourseInterface): Observable<CourseInterface[]> {
    return this.http.post<CourseInterface[]>(ApiService.COURSES_ENDPOINT, course);
  }

  deleteCourse(id: number): Observable<CourseInterface[]> {
    return this.http.delete<CourseInterface[]>(`${ApiService.COURSES_ENDPOINT}/${id}`);
  }

  getAuthors(): Observable<IAuthors[]> {
    return this.http.get<IAuthors[]>(ApiService.AUTHORS_ENDPOINT);
  }

}
