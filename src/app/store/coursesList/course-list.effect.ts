import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../core/services/api.service';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { ICourseId, ICoursesNumber, loadMore, setAuthors, setBiggestId, setCourses } from './courses-list.actions';
import { CourseInterface, IAuthors } from '../../courses-page/course.interface';
import { FormControl } from '@angular/forms';

@Injectable()
export class CourseListEffect {
  private coursesUrl = 'courses';

  getInitialCourses$ = createEffect(() => this.actions$.pipe(
    ofType('[Course Page] Get Courses'),
    switchMap((param: ICoursesNumber) =>
      this.api.get('courses', `start=${param.start}&count=${param.count}`)
      .pipe(
        map((courses: CourseInterface[]) =>
          param.start === 0 ? setCourses({courses}) : loadMore({courses}))
      ))
  ));

  getAuthors$ = createEffect(() => this.actions$.pipe(
    ofType('[Course Page] Get Authors'),
    switchMap((param: any) =>
      this.api.get('authors')
        .pipe(
          map((authors: IAuthors[]) => setAuthors({authors}))
        )
    )
  ));

  searchCourses$ = createEffect(() => this.actions$.pipe(
    ofType('[Course Page] Search Courses'),
    debounceTime(1000),
    map((searchControl: FormControl) => searchControl.value),
    distinctUntilChanged(),
    filter((searchTerm: string) => searchTerm.length > 2 || searchTerm === ''),
    switchMap((searchQuery: string) =>
      this.api.get('courses', `textFragment=${searchQuery}`)
        .pipe(
          map((courses: CourseInterface[]) => setCourses({courses}))
        )
    )
  ));

  getCourseById$ = createEffect(() => this.actions$.pipe(
    ofType('[Course Page] Get Course By Id'),
    switchMap((param: ICourseId) =>
      this.api.get(`${this.coursesUrl}/${param.id}`)
        .pipe(
          map((courses: CourseInterface) => setCourses({courses: [courses]}))
        )
    )
  ));

  deleteCourse$ = createEffect(() => this.actions$.pipe(
    ofType('[Course Page] Delete Course'),
    switchMap((param: ICourseId) =>
      this.api.delete(this.coursesUrl, param.id)
    )
  ), { dispatch: false });

  addCourse$ = createEffect(() => this.actions$.pipe(
    ofType('[Course Page] Add Course'),
    switchMap((course: CourseInterface) =>
      this.api.post(this.coursesUrl, course)
    )
  ), { dispatch: false });

  getLastId$ = createEffect(() => this.actions$.pipe(
    ofType('[Course Page] Get Biggest Id'),
    switchMap(() =>
      this.api.get('courses', `start=0&count=-1`)
        .pipe(
          map((courses: CourseInterface[]) => courses.reduce((max: number, { id }) => id > max ? id : max, 0)),
          map(id => setBiggestId({id: id + 1}),
        )
    )
  )));

  updateCourse$ = createEffect(() => this.actions$.pipe(
    ofType('[Course Page] Update Course'),
    switchMap((payload: any) =>
      this.api.patch(this.coursesUrl, payload.id, payload.course))
  ), { dispatch: false });

  constructor(private actions$: Actions,
              private api: ApiService) {}
}
