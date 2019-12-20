import {Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../../courses-page/services/courses.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
              private coursesService: CoursesService,) {
    this.newUserForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      authors: new FormControl('')
    });
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  onSave() {
    this.coursesService.getCoursesList().subscribe(courses => {
      this.id = courses.reduce((max: number, { id }) => id > max ? id : max, 0) + 1;
      this.coursesService.createCourse({
        id: this.id,
        name: this.newUserForm.value.name,
        description: this.newUserForm.value.description,
        date: this.newUserForm.value.date,
        length: this.newUserForm.value.duration
      });
      this.router.navigate(['/courses']);
    });
  }
}
