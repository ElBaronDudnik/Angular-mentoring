import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CourseInterface, IAuthors } from '../../courses-page/course.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static ENDPOINT = 'http://localhost:3004';

  constructor(private http: HttpClient) { }

  get(url: string, params?: string): Observable<CourseInterface[] | IAuthors[]> {
    return this.http.get<CourseInterface[] | IAuthors[]>(`${ApiService.ENDPOINT}/${url}/?${params}`);
  }

  post(url: string, params: object, options?: object): Observable<any> {
    return this.http.post<any>(
      `${ApiService.ENDPOINT}/${url}`,
      params,
      options
      )
  }

  getCoursesById(url: string, id: number): Observable<CourseInterface> {
    return this.http.get<CourseInterface>(`${ApiService.ENDPOINT}/${url}/${id}`);
  }

  changeCourseById(url:string, id: number, newCourse: CourseInterface): Observable<CourseInterface> {
    return this.http.patch<CourseInterface>(`${ApiService.ENDPOINT}/${url}/#${id}`, newCourse);
  }

  createCourse(url: string, course: CourseInterface): Observable<CourseInterface[]> {
    return this.http.post<CourseInterface[]>(`${ApiService.ENDPOINT}/${url}`, course);
  }

  deleteCourse(url: string, id: number): Observable<CourseInterface[]> {
    return this.http.delete<CourseInterface[]>(`${ApiService.ENDPOINT}/${url}/${id}`);
  }

}
