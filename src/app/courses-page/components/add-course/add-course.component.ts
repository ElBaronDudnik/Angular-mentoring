import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICrumbs } from 'app/core/components/breadcrumbs/breadcrumbs.interface';
import { BreadcrumbsService } from 'app/core/services/breadcrumbs.service';
import { AppState } from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { addCourse, getAuthors, getBiggestId, getCourseById, updateCourse } from '../../../store/coursesList/courses-list.actions';
import { Observable, Subscription } from 'rxjs';
import { selectAuthors, selectCoursesList, selectLastId } from '../../../store/coursesList/course-list.selector';
import { CourseInterface } from '../../course.interface';
import { Course } from 'app/courses-page/course.model';
import { DatePipe } from '@angular/common';

function validateDuration(durationFormControl: FormControl) {
  const duration = +durationFormControl.value;
  return Number.isNaN(duration)
    ? { validateDuration: 'Only numbers allows' }
    : null;
}

function validateDate(dateFormControl: FormControl) {
  const DATE_REGEXP = /(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/([12]\d{3})/;
  return DATE_REGEXP.test(dateFormControl.value) ? null : {
    validateDate: `Date should be in appropriate format: 'dd/mm/yyyy'`
  };
}

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseComponent implements OnInit, OnDestroy {
  public newUserForm!: FormGroup;
  private lastCoursesId!: number;
  private subscription!: Subscription;
  public course!: CourseInterface;

  public availableAuthorNames!: Observable<string[]>;
  public formTitle!: string;

  public title!: FormControl;
  public description!: FormControl;
  public duration!: FormControl;
  public date!: FormControl;
  public authors!: FormControl;

  constructor(private router: Router,
              private crumbService: BreadcrumbsService,
              private store: Store<AppState>,
              private route: ActivatedRoute,
              private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.store.dispatch(getBiggestId());
    this.store.dispatch(getAuthors());

    this.availableAuthorNames = this.store.select(selectAuthors);

    // check whether we should add or update course
    if (this.route.snapshot.params.id) {
      this.store.dispatch(getCourseById({ id: this.route.snapshot.params.id }));
      this.subscription = this.store.select(selectCoursesList)
        .subscribe((courses: CourseInterface[]) => {
          this.course = courses[0];
          this.setBreadcrumbs(this.course.name);
          this.creatingForm();
          this.formTitle = 'Update Course';
        });
    } else {
      this.subscription = this.store.select(selectLastId)
        .subscribe((lastId: number)  => {
          this.lastCoursesId = lastId;
          this.setBreadcrumbs('New Course');
          this.creatingForm();
          this.formTitle = 'New Course';
        });
    }
  }

  creatingForm() {
    const initialFormState = this.course
    ? this.course
    : new Course({
      id: 0,
      name: '',
      description: '',
      length: 0,
      date: '',
      authors: []
    });

    this.title = new FormControl(
      initialFormState.name,
      [Validators.required, Validators.maxLength(50)]
      );
    this.description = new FormControl(
      initialFormState.description,
      [Validators.required, Validators.maxLength(500)]
      );
    this.duration = new FormControl(
      initialFormState.length || '',
      [Validators.required, validateDuration]
      );
    this.date = new FormControl(
      this.datePipe.transform(initialFormState.date, 'dd/MM/yyyy'),
      [Validators.required, validateDate]
      );
    this.authors = new FormControl(
      initialFormState.authors || '',
      Validators.required
      );

    this.newUserForm = new FormGroup({
      title: this.title,
      description: this.description,
      duration: this.duration,
      date: this.date,
      authors: this.authors
    });
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  onSave() {
    const course = {
      id: 0,
      name: this.title.value,
      description: this.description.value,
      date: this.dateParser(this.date.value),
      length: this.duration.value,
      authors: this.authors.value
    };

    if (this.course) {
      course.id = this.course.id;
      this.store.dispatch(updateCourse({id: this.course.id, course}));
    } else {
      course.id = this.lastCoursesId + 1;
      this.store.dispatch(addCourse(course));
    }

    this.router.navigate(['/courses']);
  }

  dateParser(dateString: string): string {
    const dateArray = dateString.split('/');
    return new Date(+dateArray[2], +dateArray[1] - 1, +dateArray[0]).toString();
  }

  setBreadcrumbs(value: string) {
    const parentCrumb: ICrumbs = {
      title: 'Courses',
      link: '/courses',
      level: 'main'
    };
    const currentCrumb: ICrumbs = {
      title: value,
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
