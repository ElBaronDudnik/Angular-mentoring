import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private $breadcrumbTitle = new Subject<string>();
  constructor() {}

  setCrumb(name: string): void {
    this.$breadcrumbTitle.next(name);
  }

  getCrumb(): Subject<string> {
    return this.$breadcrumbTitle;
  }
}
