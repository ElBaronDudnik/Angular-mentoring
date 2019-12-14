import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface ICrumbs {
  title: string;
  link: string;
  level: 'main' | 'child';
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private breadcrumbTitle$: Subject<ICrumbs> = new Subject<ICrumbs>();
  constructor() {}

  setCrumb(crumbs: ICrumbs) {
    this.breadcrumbTitle$.next(crumbs);
  }

  getCrumb(): Observable<ICrumbs> {
    return this.breadcrumbTitle$.asObservable();
  }
}
