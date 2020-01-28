import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppState } from '../../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { searchCourses } from '../../../../store/coursesList/courses-list.actions';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseSearchComponent {
  public search!: FormControl;
  constructor(private store: Store<AppState>) {
    this.search = new FormControl('');
  }

  onSearch(): void {
    this.store.dispatch(searchCourses({ formControl: this.search }));
  }
}
