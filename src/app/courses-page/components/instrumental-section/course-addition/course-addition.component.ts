import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-addition',
  templateUrl: './course-addition.component.html',
  styleUrls: ['./course-addition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAdditionComponent implements OnInit {
  @Output() addCourse = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onAdd(): void {
    this.addCourse.emit();
  }

}
