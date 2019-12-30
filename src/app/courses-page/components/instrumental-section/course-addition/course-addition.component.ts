import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-addition',
  templateUrl: './course-addition.component.html',
  styleUrls: ['./course-addition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAdditionComponent {
  @Output() addCourse = new EventEmitter();

  onAdd(): void {
    this.addCourse.emit();
  }

}
