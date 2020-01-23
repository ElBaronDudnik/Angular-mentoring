import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICrumbs } from 'app/core/components/breadcrumbs/breadcrumbs.interface';
import { BreadcrumbsService } from 'app/core/services/breadcrumbs.service';
import { AppState } from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { addCourse, getBiggestId } from '../../../store/coursesList/courses-list.actions';
import { Subscription } from 'rxjs';
import { selectLastId } from '../../../store/coursesList/course-list.selector';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseComponent implements OnInit, OnDestroy {
  public newUserForm: FormGroup;
  private lastCoursesId!: number;
  private subscription!: Subscription;
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
    this.subscription = this.store.select(selectLastId)
      .subscribe((lastId: number)  => {
        this.lastCoursesId = lastId;
    });
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  onSave() {
    const course = {
      id: this.lastCoursesId + 1,
      name: this.newUserForm.value.title,
      description: this.newUserForm.value.description,
      date: this.newUserForm.value.date,
      length: this.newUserForm.value.duration
    };
    this.store.dispatch(addCourse(course));
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
