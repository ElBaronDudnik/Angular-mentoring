import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onCancel() {
    console.log('Cancel');
  }

  onSave() {
    console.log('Save');
  }
}
