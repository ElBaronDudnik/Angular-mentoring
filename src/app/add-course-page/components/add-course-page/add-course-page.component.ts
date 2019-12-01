import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCoursePageComponent implements OnInit {

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
