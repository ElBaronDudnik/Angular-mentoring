import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CourseInterface } from '../../courses-page/course.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static ENDPOINT = 'http://localhost:3004';

  constructor(private http: HttpClient) { }

  get(url: string, params?: string): Observable<any> {
    console.log('get')
    return this.http.get<any>(`${ApiService.ENDPOINT}/${url}/?${params}`);
  }

  post(url: string, params: object, options?: object): Observable<any> {
    return this.http.post<any>(
      `${ApiService.ENDPOINT}/${url}`,
      params,
      options
      );
  }

  patch(url: string, id: number, newCourse: CourseInterface): Observable<CourseInterface> {
    return this.http.patch<CourseInterface>(
      `${ApiService.ENDPOINT}/${url}/#${id}`,
      newCourse
    );
  }

  delete(url: string, id: number): Observable<CourseInterface[]> {
    return this.http.delete<CourseInterface[]>(`${ApiService.ENDPOINT}/${url}/${id}`);
  }

}
