import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { CourseInterface } from '../../../course.interface';
import { Course } from '../../../course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() course: CourseInterface = new Course({
    id: 1,
    title: '',
    creationDate: new Date(),
    duration: 23,
    description: ''
  });
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  onEdit(): void {
    console.log('Edit');
  }

  onDelete(): void {
    this.delete.emit(this.course.id);
  }
}
