import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-course-addition',
  templateUrl: './course-addition.component.html',
  styleUrls: ['./course-addition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAdditionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAdd(): void {
    console.log('Add course');
  }

}
