import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICrumbs } from 'app/core/components/breadcrumbs/breadcrumbs.interface';
import { BreadcrumbsService } from 'app/core/services/breadcrumbs.service';
import { AppState } from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { CoursesState } from '../../../store/coursesList/courses-list.reducers';
import { addCourse, getBiggestId } from '../../../store/coursesList/courses-list.actions';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseComponent implements OnInit {
  public newUserForm: FormGroup;
  private id!: number;
  constructor(private router: Router,
              private crumbService: BreadcrumbsService,
              private store: Store<AppState>) {
    this.newUserForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      authors: new FormControl('')
    });
    this.setBreadcrumbs();
  }

  ngOnInit() {
    this.store.dispatch(getBiggestId());
    this.store.select('courseList').subscribe((coursesListState: CoursesState)  => {
      this.id = coursesListState.lastId;
    });
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  onSave() {
    const course = {
      id: this.id,
      name: this.newUserForm.value.title,
      description: this.newUserForm.value.description,
      date: this.newUserForm.value.date,
      length: this.newUserForm.value.duration
    };
    this.store.dispatch(addCourse({course}));
    this.router.navigate(['/courses']);
  }

  setBreadcrumbs() {
    const parentCrumb: ICrumbs = {
      title: 'Courses',
      link: '/courses',
      level: 'main'
    };
    const currentCrumb: ICrumbs = {
      title: 'New Course',
      link: '',
      level: 'child'
    };
    this.crumbService.setCrumb(parentCrumb);
    this.crumbService.setCrumb(currentCrumb);
  }
}
