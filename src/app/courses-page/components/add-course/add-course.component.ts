import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../../courses-page/services/courses.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseComponent implements OnInit {
  public newUserForm: FormGroup;
  constructor(private router: Router,
              private coursesService: CoursesService) {
    this.newUserForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      authors: new FormControl('')
    });
  }

  ngOnInit() {
    console.log(this.newUserForm.value);
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  generateId(): number {
    return this.coursesService.getBiggestId() + 1;
  }

  onSave() {
    this.coursesService.createCourse({
      id: this.generateId(),
      title: this.newUserForm.value.title,
      description: this.newUserForm.value.description,
      creationDate: this.newUserForm.value.date,
      duration: this.newUserForm.value.duration
    });
    this.router.navigate(['/courses']);
  }
}
