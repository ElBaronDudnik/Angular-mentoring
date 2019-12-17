import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../../courses-page/services/courses.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BreadcrumbsService } from 'app/core/services/breadcrumbs.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseComponent{
  public newUserForm: FormGroup;
  private id!: number;
  constructor(private router: Router,
              private coursesService: CoursesService,
              private route: ActivatedRoute,
              private crumbsService: BreadcrumbsService) {
    this.newUserForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      authors: new FormControl('')
    });
  }

  ngOnInit() {
    this.generateId();
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  generateId(): void {
    this.coursesService.getCoursesList(0).subscribe((courses) => {
      this.id = courses.reduce((max, { id }) => id > max ? id : max, 0) + 1;
    });
  }

  onSave() {
    this.coursesService.createCourse({
      id: this.id,
      name: this.newUserForm.value.name,
      description: this.newUserForm.value.description,
      date: this.newUserForm.value.date,
      length: this.newUserForm.value.duration
    });
    this.router.navigate(['/courses']);
  }
}
