import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../../courses-page/services/courses.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseInterface } from '../../course.interface';
import { ICrumbs } from 'app/core/components/breadcrumbs/breadcrumbs.interface';
import { BreadcrumbsService } from 'app/core/services/breadcrumbs.service';


import * as CoursesListActions from '../courses-list/store/courses-list.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseComponent {
  public newUserForm: FormGroup;
  private id!: number;
  constructor(private router: Router,
              private coursesService: CoursesService,
              private crumbService: BreadcrumbsService,
              private store: Store<any>) {
    this.newUserForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      authors: new FormControl('')
    });
    this.setBreadcrumbs();
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  onSave() {
    const newCourse = {
      id: this.id,
      name: this.newUserForm.value.name,
      description: this.newUserForm.value.description,
      date: this.newUserForm.value.date,
      length: this.newUserForm.value.duration
    }
    this.store.dispatch(new CoursesListActions.AddCourse(newCourse))
    this.coursesService.getCoursesList().subscribe((courses: CourseInterface[])  => {
      this.id = courses.reduce((max: number, { id }) => id > max ? id : max, 0) + 1;
      this.coursesService.createCourse(newCourse);
      this.router.navigate(['/courses']);
    });
  }

  setBreadcrumbs() {
    const parentCrumb: ICrumbs = {
      title: 'Courses',
      link: '/courses',
      level: 'main'
    }
    const currentCrumb: ICrumbs = {
      title: 'New Course',
      link: '',
      level: 'child'
    }
    this.crumbService.setCrumb(parentCrumb);
    this.crumbService.setCrumb(currentCrumb);
  }
}
